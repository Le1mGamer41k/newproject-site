import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children, showLoginPrompt = false }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user && showLoginPrompt) {
    return (
      <div className="auth-prompt">
        <div className="auth-prompt-content">
          <div className="auth-prompt-icon">
            <i className="fas fa-lock"></i>
          </div>
          <h3>Потрібна авторизація</h3>
          <p>Для замовлення послуг необхідно увійти в акаунт</p>
          <div className="auth-prompt-buttons">
            <button 
              className="btn-primary" 
              onClick={() => navigate('/login')}
            >
              Увійти в акаунт
            </button>
            <button 
              className="btn-secondary" 
              onClick={() => navigate('/')}
            >
              На головну
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    navigate('/login');
    return null;
  }

  return children;
};

export default ProtectedRoute;
