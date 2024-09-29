import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup'); // Navigate to the signup page
  };


  // handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      // send email and password to backend
      const response = await axios.post('https://vistarwebx-server-six.vercel.app/api/login', {
        email,
        password,
      });
      console.log(response.data); // Log the response data

      console.log('Username:', response.data.user.username);
      localStorage.setItem('token', response.data.token); // Store the token
      localStorage.setItem('username', response.data.user.username); // store username
      navigate('/home'); // Redirect to home
    } catch (error) {
       console.log(error);
      setMessage(error.response?.data?.msg || 'invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        {/* form */}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
        {/* singup link */}
        <p className=' text-blue-600 hover:cursor-pointer '  onClick={handleSignUpClick}> Don't Have Account ? Sing up</p>
        {message && <p className="mt-4 text-center text-red-500">{message}</p>}
      </div>

    </div>
  );
};

export default Login;
