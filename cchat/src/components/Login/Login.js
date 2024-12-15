import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css"

const Login = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (name) {
      navigate("/chat", { state: { name } });
    }
  };

  return (
    <div className='login-page'>
      <div className='login-container'>
        <h1>Pingify</h1>
        <input 
          type='text' 
          placeholder='Enter your name' 
          id="username" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <button disabled={!name} onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
