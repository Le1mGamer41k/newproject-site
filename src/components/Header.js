"use client"

import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path) => {
    return location.pathname === path ? "nav-link active" : "nav-link"
  }

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
    } catch (error) {
      console.error('Error logging out:', error)
    }
  }

  const handleOrderClick = (e) => {
    if (!user) {
      e.preventDefault()
      navigate('/login')
    }
  }

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <i className="fas fa-gamepad"></i>
            <span>GameBoost</span>
          </Link>
          
          <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <li>
              <Link to="/" className={isActive("/")}>
                Головна
              </Link>
            </li>
            <li>
              <Link to="/services" className={isActive("/services")}>
                Послуги
              </Link>
            </li>
            <li>
              <Link to="/how-it-works" className={isActive("/how-it-works")}>
                Як це працює
              </Link>
            </li>
            <li>
              <Link 
                to="/checkout" 
                className={isActive("/checkout")}
                onClick={handleOrderClick}
              >
                Оплата
              </Link>
            </li>
          </ul>
          
          <div className={`nav-auth ${isMenuOpen ? "active" : ""}`}>
            {user ? (
              <div className="user-menu">
                <div className="user-info">
                  <i className="fas fa-user-circle"></i>
                  <span>{user.displayName || user.email}</span>
                </div>
                <button className="btn-logout" onClick={handleLogout}>
                  <i className="fas fa-sign-out-alt"></i>
                  Вийти
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" className="btn-login">
                  Увійти
                </Link>
                <Link to="/login" className="btn-register">
                  Реєстрація
                </Link>
              </>
            )}
          </div>
          
          <div className={`hamburger ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
