import React, { useState } from 'react';
import './TrackPage.css';

const TrackPage: React.FC = () => {
  const [isTracking, setIsTracking] = useState(false);
  const [workoutType, setWorkoutType] = useState<string>('');

  const workoutModes = [
    { id: 'run', label: 'GPS Run', icon: '🏃', color: '#64ffda' },
    { id: 'bike', label: 'GPS Bike', icon: '🚴', color: '#ff6b6b' },
    { id: 'strength', label: 'Strength', icon: '💪', color: '#4ecdc4' },
    { id: 'custom', label: 'Custom', icon: '⚡', color: '#ffe66d' }
  ];

  const recentWorkouts = [
    { type: 'Run', distance: '5.2km', duration: '28:15', date: 'Today', icon: '🏃' },
    { type: 'Strength', exercises: '8 exercises', duration: '45:30', date: 'Yesterday', icon: '💪' },
    { type: 'Bike', distance: '12.8km', duration: '42:10', date: '2 days ago', icon: '🚴' }
  ];

  const handleStartWorkout = (type: string) => {
    setWorkoutType(type);
    setIsTracking(true);
  };

  const handleStopWorkout = () => {
    setIsTracking(false);
    setWorkoutType('');
  };

  if (isTracking) {
    return (
      <div className="track-page">
        <div className="live-tracking">
          <div className="tracking-header">
            <h2>Live Workout</h2>
            <button onClick={handleStopWorkout} className="stop-btn">Stop</button>
          </div>
          
          <div className="tracking-stats">
            <div className="stat-display">
              <span className="stat-value">00:15:32</span>
              <span className="stat-label">Duration</span>
            </div>
            <div className="stat-display">
              <span className="stat-value">2.4</span>
              <span className="stat-label">Distance (km)</span>
            </div>
            <div className="stat-display">
              <span className="stat-value">145</span>
              <span className="stat-label">BPM</span>
            </div>
          </div>

          <div className="tracking-actions">
            <button className="action-btn">Pause</button>
            <button className="action-btn">Add Note</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="track-page">
      {/* Workout Modes */}
      <section className="workout-modes">
        <h3 className="section-title">Start Workout</h3>
        <div className="modes-grid">
          {workoutModes.map((mode) => (
            <button
              key={mode.id}
              className="mode-card"
              onClick={() => handleStartWorkout(mode.id)}
              style={{ '--mode-color': mode.color } as React.CSSProperties}
            >
              <span className="mode-icon">{mode.icon}</span>
              <span className="mode-label">{mode.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Recent Workouts */}
      <section className="recent-workouts">
        <h3 className="section-title">Recent Workouts</h3>
        <div className="workouts-list">
          {recentWorkouts.map((workout, index) => (
            <div key={index} className="workout-item">
              <div className="workout-icon">{workout.icon}</div>
              <div className="workout-details">
                <h4 className="workout-type">{workout.type}</h4>
                <div className="workout-stats">
                  {workout.distance && <span>{workout.distance}</span>}
                  {workout.exercises && <span>{workout.exercises}</span>}
                  <span>{workout.duration}</span>
                </div>
                <span className="workout-date">{workout.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TrackPage; 