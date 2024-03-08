import React, { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility= () =>{setShowPassword(!showPassword)};

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="sign-up-container">
      <div className='logo'><img src='/trade.png' alt='logo' width={70} height={70}></img>
      </div>
      <h1>EduGearSwitch </h1>
      <hr className='title' >
      </hr>
      <form onSubmit={handleSubmit}>
        <h2>Log In</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="password-input">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          <div className={`eye-icon ${showPassword ? 'open' : ''}`} onClick={togglePasswordVisibility}>
            <img src='/showpassword.png' alt='eye icon' width={20} height={20}/ >

            
          </div>
          </div>
        
        <div className='button1'>
        <button type="submit">login</button>
        </div>
      </form>
      <p>
        OR
      </p>
      <div className='button2'>
        <button>
          <a href="/google-login">Log in with Google</a>
        </button>
        <button>
         <a href="/apple-login">Log in with Apple</a>
        </button>
      </div>
      <p>
        Don't have an account?{' '}
        <a href="/login">SignUp</a>
      </p>
      
     
    </div>
  );
};

export default SignUp;
