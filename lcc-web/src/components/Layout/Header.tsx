import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <div className="header-content">
        <Link to="/" className="header-logo">
          <div className="logo-icon">LCC</div>
          <span className="logo-text">Liberty Challenge</span>
        </Link>
        <div className="header-actions">
          <button className="notification-btn">
            <span className="notification-icon">🔔</span>
            <span className="notification-badge">3</span>
          </button>
          <Link to="/profile" className="user-avatar">
            <div className="avatar-placeholder">👤</div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 