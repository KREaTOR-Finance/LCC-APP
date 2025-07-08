import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage: React.FC = () => {
  const mockStats = {
    steps: 8420,
    activeMinutes: 45,
    lccBalance: 1250,
    weeklyGoal: 75
  };

  const quickActions = [
    { icon: '🏃', label: 'Start Workout', path: '/track' },
    { icon: '🍽️', label: 'Log Meal', path: '/nutrition' },
    { icon: '👥', label: 'Join Club', path: '/clubs' },
    { icon: '💰', label: 'View Rewards', path: '/wallet' }
  ];

  const socialFeed = [
    { user: 'Sarah M.', action: 'completed a 5K run', time: '2h ago', avatar: '👩' },
    { user: 'Mike R.', action: 'joined CrossFit Crushers', time: '4h ago', avatar: '👨' },
    { user: 'Emma L.', action: 'earned 50 LCC tokens', time: '6h ago', avatar: '👩' }
  ];

  return (
    <div className="home-page">
      {/* Stats Summary */}
      <section className="stats-summary">
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-icon">👣</span>
            <div className="stat-content">
              <span className="stat-value">{mockStats.steps.toLocaleString()}</span>
              <span className="stat-label">Steps Today</span>
            </div>
          </div>
          <div className="stat-card">
            <span className="stat-icon">⏱️</span>
            <div className="stat-content">
              <span className="stat-value">{mockStats.activeMinutes}</span>
              <span className="stat-label">Active Minutes</span>
            </div>
          </div>
          <div className="stat-card">
            <span className="stat-icon">💰</span>
            <div className="stat-content">
              <span className="stat-value">{mockStats.lccBalance}</span>
              <span className="stat-label">LCC Balance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="quick-actions">
        <h3 className="section-title">Quick Actions</h3>
        <div className="actions-grid">
          {quickActions.map((action) => (
            <Link key={action.path} to={action.path} className="action-card">
              <span className="action-icon">{action.icon}</span>
              <span className="action-label">{action.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Social Feed */}
      <section className="social-feed">
        <h3 className="section-title">Recent Activity</h3>
        <div className="feed-list">
          {socialFeed.map((post, index) => (
            <div key={index} className="feed-item">
              <div className="feed-avatar">{post.avatar}</div>
              <div className="feed-content">
                <p className="feed-text">
                  <strong>{post.user}</strong> {post.action}
                </p>
                <span className="feed-time">{post.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage; 