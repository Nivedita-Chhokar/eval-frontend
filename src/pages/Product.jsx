import React, {useEffect, useState} from 'react'
import { useParams } from "react-router";
import axios from "axios"

export default function Product() {
  const { id } = useParams();
  console.log(id, 'id')
  const [data, setData]= useState({});

  useEffect(() => {
    axios({
      url: `https://eval-backend-lyart.vercel.app/api/product/${id}`,
      method: "GET"
    }).then((res)=> {
      setData(res.data.data)
    })
  }, [])
  
  return (
    <div>
      <img src={data?.imgUrl}/>
      <h1>{data.name}</h1>
    </div>
  )
}