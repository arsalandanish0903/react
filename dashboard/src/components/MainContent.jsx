import React from 'react';
import { Outlet } from 'react-router-dom';

const MainContent = () => {
  return (
    <div className="flex-1 p-6 bg-gray-100">
      <Outlet />
    </div>
  );
};

export default MainContent;
