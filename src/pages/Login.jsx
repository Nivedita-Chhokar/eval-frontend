import axios  from "axios";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const apiObj = {
      email: email,
      password: password
    }
    axios({
      method: "POST",
      url: "https://eval-backend-lyart.vercel.app/api/auth/login",
      data: apiObj
    }).then((res)=> {
      localStorage.setItem('token', res.data.token)
    })

  };
  return (
    <div>
        <h2>Login</h2>
      <input
        value={email}
        placeholder="Email"
        type="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        value={password}
        placeholder="password"
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        Login
      </button>
      <div>
        Don't have an account? <Link to='/register'>Register</Link>
      </div>
    </div>
  );
};

export default Login;