import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './BottomNavigation.css';

const BottomNavigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/track', label: 'Track', icon: '🏃' },
    { path: '/clubs', label: 'Clubs', icon: '👥' },
    { path: '/wallet', label: 'Wallet', icon: '💰' },
    { path: '/profile', label: 'Profile', icon: '👤' },
  ];

  return (
    <nav className="bottom-navigation">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) => 
            `nav-item ${isActive ? 'active' : ''}`
          }
        >
          <span className="nav-icon">{item.icon}</span>
          <span className="nav-label">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomNavigation; 