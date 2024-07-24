import React from 'react';

const TopNavBar = () => {
  return (
    <div className="bg-white shadow p-4 flex justify-between items-center">
      <input
        type="text"
        placeholder="Search..."
        className="border rounded py-2 px-4"
      />
      <div className="flex items-center space-x-4">
        <button className="text-gray-600">Notifications</button>
        <button className="text-gray-600">Profile</button>
      </div>
    </div>
  );
};

export default TopNavBar;
