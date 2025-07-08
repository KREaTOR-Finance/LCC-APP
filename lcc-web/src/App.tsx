import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './components/Layout/AppLayout';
import HomePage from './pages/Home/HomePage';
import TrackPage from './pages/Track/TrackPage';
import ClubsPage from './pages/Clubs/ClubsPage';
import WalletPage from './pages/Wallet/WalletPage';
import ProfilePage from './pages/Profile/ProfilePage';
import './App.css';

function App() {
  return (
    <Router basename="/LCC-APP">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="track" element={<TrackPage />} />
          <Route path="clubs" element={<ClubsPage />} />
          <Route path="wallet" element={<WalletPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
