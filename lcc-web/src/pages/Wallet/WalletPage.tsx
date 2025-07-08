import React, { useState } from 'react';
import './WalletPage.css';

const WalletPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'transactions' | 'staking'>('overview');

  const walletData = {
    balance: 1250,
    staked: 500,
    claimable: 75,
    totalEarned: 3200
  };

  const transactions = [
    { id: 1, type: 'earned', amount: 50, description: 'Workout completion', time: '2h ago', icon: '🏃' },
    { id: 2, type: 'spent', amount: -25, description: 'AI workout plan', time: '1d ago', icon: '🤖' },
    { id: 3, type: 'earned', amount: 100, description: 'Club challenge win', time: '2d ago', icon: '🏆' },
    { id: 4, type: 'earned', amount: 30, description: 'Daily streak bonus', time: '3d ago', icon: '🔥' }
  ];

  const stakingOptions = [
    { id: 1, name: 'Flexible Staking', apy: 8.5, minAmount: 100, currentStaked: 300 },
    { id: 2, name: 'Locked Staking', apy: 12.0, minAmount: 500, currentStaked: 200, lockPeriod: '30 days' }
  ];

  return (
    <div className="wallet-page">
      {/* Tab Navigation */}
      <div className="tab-navigation">
        <button
          className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button
          className={`tab-btn ${activeTab === 'transactions' ? 'active' : ''}`}
          onClick={() => setActiveTab('transactions')}
        >
          History
        </button>
        <button
          className={`tab-btn ${activeTab === 'staking' ? 'active' : ''}`}
          onClick={() => setActiveTab('staking')}
        >
          Staking
        </button>
      </div>

      {activeTab === 'overview' && (
        <>
          {/* Balance Cards */}
          <section className="balance-overview">
            <div className="main-balance">
              <h3 className="balance-label">Total Balance</h3>
              <div className="balance-amount">{walletData.balance} LCC</div>
              <div className="balance-usd">≈ $1,250 USD</div>
            </div>
            
            <div className="balance-grid">
              <div className="balance-card">
                <span className="card-icon">💰</span>
                <div className="card-content">
                  <span className="card-value">{walletData.claimable}</span>
                  <span className="card-label">Claimable</span>
                </div>
              </div>
              <div className="balance-card">
                <span className="card-icon">🔒</span>
                <div className="card-content">
                  <span className="card-value">{walletData.staked}</span>
                  <span className="card-label">Staked</span>
                </div>
              </div>
              <div className="balance-card">
                <span className="card-icon">📈</span>
                <div className="card-content">
                  <span className="card-value">{walletData.totalEarned}</span>
                  <span className="card-label">Total Earned</span>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Actions */}
          <section className="wallet-actions">
            <h3 className="section-title">Quick Actions</h3>
            <div className="actions-grid">
              <button className="action-btn primary">
                <span className="action-icon">💸</span>
                <span>Send</span>
              </button>
              <button className="action-btn">
                <span className="action-icon">📥</span>
                <span>Receive</span>
              </button>
              <button className="action-btn">
                <span className="action-icon">🔒</span>
                <span>Stake</span>
              </button>
              <button className="action-btn">
                <span className="action-icon">💱</span>
                <span>Swap</span>
              </button>
            </div>
          </section>
        </>
      )}

      {activeTab === 'transactions' && (
        <section className="transactions">
          <h3 className="section-title">Transaction History</h3>
          <div className="transactions-list">
            {transactions.map((tx) => (
              <div key={tx.id} className="transaction-item">
                <div className="tx-icon">{tx.icon}</div>
                <div className="tx-details">
                  <span className="tx-description">{tx.description}</span>
                  <span className="tx-time">{tx.time}</span>
                </div>
                <span className={`tx-amount ${tx.type === 'earned' ? 'positive' : 'negative'}`}>
                  {tx.type === 'earned' ? '+' : ''}{tx.amount} LCC
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeTab === 'staking' && (
        <section className="staking">
          <h3 className="section-title">Staking Options</h3>
          <div className="staking-options">
            {stakingOptions.map((option) => (
              <div key={option.id} className="staking-card">
                <div className="staking-header">
                  <h4 className="staking-name">{option.name}</h4>
                  <span className="staking-apy">{option.apy}% APY</span>
                </div>
                <div className="staking-details">
                  <div className="staking-info">
                    <span>Min Amount: {option.minAmount} LCC</span>
                    {option.lockPeriod && <span>Lock: {option.lockPeriod}</span>}
                  </div>
                  <div className="staking-current">
                    <span>Currently Staked: {option.currentStaked} LCC</span>
                  </div>
                </div>
                <div className="staking-actions">
                  <button className="stake-btn">Stake More</button>
                  <button className="unstake-btn">Unstake</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default WalletPage; 