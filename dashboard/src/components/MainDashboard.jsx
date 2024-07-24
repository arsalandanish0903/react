import React from 'react';
import Sidebar from './Sidebar';
import TopNavBar from '../components/Topnavbar';
import MainContent from './MainContent';

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopNavBar />
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;
