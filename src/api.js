import axios from "axios";

const apiInstance = axios.create({
  baseURL: 'https://eval-backend-lyart.vercel.app/',
  headers: {
      'x-access-token': localStorage.getItem('token'  ),
  }
});

export default apiInstance