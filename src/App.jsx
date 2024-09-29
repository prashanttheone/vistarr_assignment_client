import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Signup from './components/Signup';
import Signup from './components/Singup';
import Login from './components/Login';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} /> {/* Default route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
