import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { doc, setDoc, serverTimestamp, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import '../styles/styles.css';

const initialState = {
  email: '',
  password: '',
  name: '',
};

function Login() {
  const location = useLocation();
  const initialRegisterState = location.state?.isRegistering || false;
  const [formData, setFormData] = useState(initialState);
  const [isRegistering, setIsRegistering] = useState(initialRegisterState);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData(initialState);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (isRegistering) {
        const { email, password, name } = formData;
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, 'users', userCredential.user.uid), {
          email,
          name,
          createdAt: serverTimestamp(),
        });
      } else {
        const { email, password } = formData;
        await signInWithEmailAndPassword(auth, email, password);
      }
      resetForm();
      navigate('/');
    } catch (err) {
      console.error(err);
      setError('Помилка: ' + (err?.message || 'Спробуйте ще раз.'));
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);
    setError('');
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userRef = doc(db, 'users', user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        await setDoc(userRef, {
          email: user.email,
          name: user.displayName,
          createdAt: serverTimestamp(),
        });
      }

      navigate('/');
    } catch (err) {
      console.error(err);
      setError('Помилка входу через Google: ' + (err.message || 'Спробуйте ще раз.'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <div className="login-logo">
            <i className="fas fa-gamepad"></i>
            <span>GameBoost</span>
          </div>
          <h2 className="login-title">{isRegistering ? 'Реєстрація' : 'Вхід в акаунт'}</h2>
          <p className="login-subtitle">
            {isRegistering 
              ? 'Створіть акаунт для замовлення послуг' 
              : 'Увійдіть в свій акаунт для продовження'
            }
          </p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {isRegistering && (
            <div className="input-group">
              <i className="fas fa-user input-icon"></i>
              <input
                type="text"
                name="name"
                placeholder="Ваше ім'я"
                value={formData.name}
                onChange={handleChange}
                className="login-input"
                required
              />
            </div>
          )}
          
          <div className="input-group">
            <i className="fas fa-envelope input-icon"></i>
            <input
              type="email"
              name="email"
              placeholder="Електронна пошта"
              value={formData.email}
              onChange={handleChange}
              className="login-input"
              required
            />
          </div>
          
          <div className="input-group">
            <i className="fas fa-lock input-icon"></i>
            <input
              type="password"
              name="password"
              placeholder="Пароль"
              value={formData.password}
              onChange={handleChange}
              className="login-input"
              required
            />
          </div>

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? (
              <>
                <i className="fas fa-spinner fa-spin"></i>
                Завантаження...
              </>
            ) : (
              <>
                <i className={`fas ${isRegistering ? 'fa-user-plus' : 'fa-sign-in-alt'}`}></i>
                {isRegistering ? 'Зареєструватися' : 'Увійти'}
              </>
            )}
          </button>

          <div className="divider">
            <span>або</span>
          </div>

          <button
            type="button"
            className="google-button"
            onClick={handleGoogleLogin}
            disabled={loading}
          >
            {loading ? (
              <>
                <i className="fas fa-spinner fa-spin"></i>
                Завантаження...
              </>
            ) : (
              <>
                <i className="fab fa-google"></i>
                Увійти через Google
              </>
            )}
          </button>

          {error && (
            <div className="login-error">
              <i className="fas fa-exclamation-triangle"></i>
              {error}
            </div>
          )}
        </form>

        <div className="login-switch">
          <p>
            {isRegistering ? 'Вже маєте акаунт?' : 'Немає акаунта?'}{' '}
            <span
              onClick={() => {
                setIsRegistering(!isRegistering);
                resetForm();
              }}
              className="login-link"
            >
              {isRegistering ? 'Увійти' : 'Зареєструватися'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
