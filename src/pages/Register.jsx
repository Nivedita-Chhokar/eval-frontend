import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {

    const apiObj = {
      name: name,
      email: email,
      password: password,
    };
    axios({
      method: "POST",
      url: "https://eval-backend-lyart.vercel.app/api/auth/register",
      data: apiObj,
    }).then((res) => {
      navigate("/login");
      
    });
  };
  return (
    <div>
      <h2>Create an account</h2>
      <input
        value={name}
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={email}
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        value={password}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSubmit}>Signup</button>
      <div>
        Already have an account? <Link to='/login'>Login</Link>
      </div>
    </div>
  );
}