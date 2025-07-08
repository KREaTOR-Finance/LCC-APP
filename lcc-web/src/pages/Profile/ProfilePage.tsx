import React, { useState } from 'react';
import './ProfilePage.css';

const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'achievements' | 'settings'>('profile');

  const userProfile = {
    name: 'Alex Johnson',
    username: '@alexj_fitness',
    avatar: '👤',
    level: 15,
    totalWorkouts: 127,
    totalDistance: 842,
    totalEarned: 3200,
    streak: 23
  };

  const achievements = [
    { id: 1, name: 'First Steps', description: 'Complete your first workout', icon: '👣', earned: true },
    { id: 2, name: 'Marathon Runner', description: 'Run 42.2km total', icon: '🏃', earned: true },
    { id: 3, name: 'Club Leader', description: 'Create a club with 10+ members', icon: '👑', earned: false },
    { id: 4, name: 'Token Millionaire', description: 'Earn 10,000 LCC tokens', icon: '💰', earned: false }
  ];

  const stats = [
    { label: 'Workouts', value: userProfile.totalWorkouts, icon: '💪' },
    { label: 'Distance (km)', value: userProfile.totalDistance, icon: '📏' },
    { label: 'LCC Earned', value: userProfile.totalEarned, icon: '💰' },
    { label: 'Day Streak', value: userProfile.streak, icon: '🔥' }
  ];

  const settings = [
    { icon: '🔔', label: 'Notifications', action: 'toggle' },
    { icon: '🔒', label: 'Privacy', action: 'navigate' },
    { icon: '📱', label: 'Connected Devices', action: 'navigate' },
    { icon: '🌍', label: 'Language', action: 'navigate' },
    { icon: '❓', label: 'Help & Support', action: 'navigate' },
    { icon: '📄', label: 'Terms of Service', action: 'navigate' }
  ];

  return (
    <div className="profile-page">
      {/* Profile Header */}
      <section className="profile-header">
        <div className="profile-avatar">
          <div className="avatar-placeholder">{userProfile.avatar}</div>
          <div className="level-badge">Lv.{userProfile.level}</div>
        </div>
        <div className="profile-info">
          <h2 className="profile-name">{userProfile.name}</h2>
          <span className="profile-username">{userProfile.username}</span>
          <div className="profile-stats">
            <span className="stat-item">🔥 {userProfile.streak} day streak</span>
            <span className="stat-item">💪 {userProfile.totalWorkouts} workouts</span>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="tab-navigation">
        <button
          className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          Profile
        </button>
        <button
          className={`tab-btn ${activeTab === 'achievements' ? 'active' : ''}`}
          onClick={() => setActiveTab('achievements')}
        >
          Achievements
        </button>
        <button
          className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          Settings
        </button>
      </div>

      {activeTab === 'profile' && (
        <>
          {/* Stats Grid */}
          <section className="profile-stats-section">
            <h3 className="section-title">Your Stats</h3>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <span className="stat-icon">{stat.icon}</span>
                  <div className="stat-content">
                    <span className="stat-value">{stat.value.toLocaleString()}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Activity */}
          <section className="recent-activity">
            <h3 className="section-title">Recent Activity</h3>
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon">🏃</div>
                <div className="activity-content">
                  <p className="activity-text">Completed 5K run in 28:15</p>
                  <span className="activity-time">2 hours ago</span>
                </div>
                <span className="activity-reward">+50 LCC</span>
              </div>
              <div className="activity-item">
                <div className="activity-icon">💪</div>
                <div className="activity-content">
                  <p className="activity-text">Finished strength training</p>
                  <span className="activity-time">1 day ago</span>
                </div>
                <span className="activity-reward">+30 LCC</span>
              </div>
            </div>
          </section>
        </>
      )}

      {activeTab === 'achievements' && (
        <section className="achievements">
          <h3 className="section-title">Achievements</h3>
          <div className="achievements-grid">
            {achievements.map((achievement) => (
              <div key={achievement.id} className={`achievement-card ${achievement.earned ? 'earned' : 'locked'}`}>
                <div className="achievement-icon">{achievement.icon}</div>
                <div className="achievement-content">
                  <h4 className="achievement-name">{achievement.name}</h4>
                  <p className="achievement-description">{achievement.description}</p>
                </div>
                <div className="achievement-status">
                  {achievement.earned ? '✅' : '🔒'}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeTab === 'settings' && (
        <section className="settings">
          <h3 className="section-title">Settings</h3>
          <div className="settings-list">
            {settings.map((setting, index) => (
              <button key={index} className="setting-item">
                <span className="setting-icon">{setting.icon}</span>
                <span className="setting-label">{setting.label}</span>
                <span className="setting-arrow">›</span>
              </button>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProfilePage; 