import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNavigation from './BottomNavigation';
import Header from './Header';
import './AppLayout.css';

const AppLayout: React.FC = () => {
  return (
    <div className="app-layout">
      <Header />
      <main className="app-main">
        <Outlet />
      </main>
      <BottomNavigation />
    </div>
  );
};

export default AppLayout; 