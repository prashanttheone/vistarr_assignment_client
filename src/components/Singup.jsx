import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
//   Navigate to the login page
  const handleLoginClick = () => {
    navigate('/login') 
};

// handle signup
  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage('');
    // console.log("details"+ username,email,password)
    try {
        console.log("Attempting to sign up with details:", { username, email, password });
      const response = await axios.post('https://vistarwebx-server-six.vercel.app/api/signup', {
        username,
        email,
        password,
      });
      console.log("Response from server:", response);
      setMessage(response.data.msg); // Display success message

      // clear input fields
      setUsername('')
      setEmail('')
      setPassword('')

    } catch (error) {
        console.error("Error signing up:", error);
      setMessage(error.response?.data?.msg || 'An error occurred');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-4">Signup</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
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
            Signup
          </button>
        </form>
        <p className=' text-blue-600 hover:cursor-pointer '  onClick={handleLoginClick}> Already Have Account ? login</p>
     
        {message && <p className="mt-4 text-center text-red-500">{message}</p>}
      </div>
    </div>
  );
};

export default Signup;
