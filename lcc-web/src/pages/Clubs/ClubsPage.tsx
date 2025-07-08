import React, { useState } from 'react';
import './ClubsPage.css';

const ClubsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'discover' | 'my-clubs'>('discover');

  const myClubs = [
    { id: 1, name: 'Morning Runners', members: 24, treasury: 1250, icon: '🏃' },
    { id: 2, name: 'CrossFit Crushers', members: 18, treasury: 890, icon: '💪' }
  ];

  const discoverClubs = [
    { id: 3, name: 'Yoga Warriors', members: 32, treasury: 2100, icon: '🧘', category: 'Wellness' },
    { id: 4, name: 'Bike Squad', members: 15, treasury: 750, icon: '🚴', category: 'Cycling' },
    { id: 5, name: 'Weightlifters United', members: 28, treasury: 1800, icon: '🏋️', category: 'Strength' },
    { id: 6, name: 'Swim Masters', members: 12, treasury: 600, icon: '🏊', category: 'Swimming' }
  ];

  const challenges = [
    { id: 1, title: 'Weekend Warrior', club: 'Morning Runners', prize: 500, participants: 18 },
    { id: 2, title: 'Strength Challenge', club: 'CrossFit Crushers', prize: 750, participants: 12 }
  ];

  return (
    <div className="clubs-page">
      {/* Tab Navigation */}
      <div className="tab-navigation">
        <button
          className={`tab-btn ${activeTab === 'discover' ? 'active' : ''}`}
          onClick={() => setActiveTab('discover')}
        >
          Discover
        </button>
        <button
          className={`tab-btn ${activeTab === 'my-clubs' ? 'active' : ''}`}
          onClick={() => setActiveTab('my-clubs')}
        >
          My Clubs
        </button>
      </div>

      {activeTab === 'discover' && (
        <>
          {/* Create Club */}
          <section className="create-club">
            <button className="create-club-btn">
              <span className="create-icon">➕</span>
              <span>Create New Club</span>
            </button>
          </section>

          {/* Discover Clubs */}
          <section className="discover-clubs">
            <h3 className="section-title">Popular Clubs</h3>
            <div className="clubs-grid">
              {discoverClubs.map((club) => (
                <div key={club.id} className="club-card">
                  <div className="club-header">
                    <div className="club-icon">{club.icon}</div>
                    <div className="club-info">
                      <h4 className="club-name">{club.name}</h4>
                      <span className="club-category">{club.category}</span>
                    </div>
                  </div>
                  <div className="club-stats">
                    <span>{club.members} members</span>
                    <span>{club.treasury} LCC</span>
                  </div>
                  <button className="join-club-btn">Join Club</button>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {activeTab === 'my-clubs' && (
        <>
          {/* My Clubs */}
          <section className="my-clubs">
            <h3 className="section-title">My Clubs</h3>
            <div className="clubs-list">
              {myClubs.map((club) => (
                <div key={club.id} className="my-club-item">
                  <div className="club-header">
                    <div className="club-icon">{club.icon}</div>
                    <div className="club-info">
                      <h4 className="club-name">{club.name}</h4>
                      <span className="club-members">{club.members} members</span>
                    </div>
                  </div>
                  <div className="club-treasury">
                    <span className="treasury-label">Treasury</span>
                    <span className="treasury-amount">{club.treasury} LCC</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Active Challenges */}
          <section className="active-challenges">
            <h3 className="section-title">Active Challenges</h3>
            <div className="challenges-list">
              {challenges.map((challenge) => (
                <div key={challenge.id} className="challenge-item">
                  <div className="challenge-info">
                    <h4 className="challenge-title">{challenge.title}</h4>
                    <span className="challenge-club">{challenge.club}</span>
                  </div>
                  <div className="challenge-stats">
                    <span className="challenge-prize">{challenge.prize} LCC</span>
                    <span className="challenge-participants">{challenge.participants} participants</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default ClubsPage; 