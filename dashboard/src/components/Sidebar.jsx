import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-screen p-4">
      <h1 className="text-2xl font-bold mb-8">My Dashboard</h1>
      <ul>
        <li className="mb-4"><Link to="/" className="hover:text-gray-300">Home</Link></li>
        <li className="mb-4"><Link to="/profile" className="hover:text-gray-300">Profile</Link></li>
        <li className="mb-4"><Link to="/messages" className="hover:text-gray-300">Messages</Link></li>
        <li className="mb-4"><Link to="/settings" className="hover:text-gray-300">Settings</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
