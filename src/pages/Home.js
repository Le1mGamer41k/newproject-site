"use client"

import { useEffect } from "react"
import { Link } from "react-router-dom"

const Home = () => {
  useEffect(() => {
    // Counter animation for stats
    const animateCounter = (element) => {
      const target = element.textContent
      const number = Number.parseInt(target.replace(/\D/g, ""))
      const suffix = target.replace(/[\d,]/g, "")
      let current = 0
      const increment = number / 50
      const timer = setInterval(() => {
        current += increment
        if (current >= number) {
          current = number
          clearInterval(timer)
        }
        element.textContent = Math.floor(current) + suffix
      }, 30)
    }

    const statNumbers = document.querySelectorAll(".stat-number")
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target)
          observer.unobserve(entry.target)
        }
      })
    })

    statNumbers.forEach((stat) => {
      observer.observe(stat)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Професійні ігрові послуги</h1>
            <p>
              Буст рангу, продаж акаунтів, прокачка персонажів та багато іншого для популярних ігор. Швидко, безпечно,
              надійно.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Почати зараз</button>
              <button className="btn-secondary">
                <Link to="/how-it-works" className="nav-link">
                  Дізнатися більше
                </Link>
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">15K+</span>
                <span className="stat-label">Задоволених клієнтів</span>
              </div>
              <div className="stat">
                <span className="stat-number">800+</span>
                <span className="stat-label">Професійних гравців</span>
              </div>
              <div className="stat">
                <span className="stat-number">9</span>
                <span className="stat-label">Популярних ігор</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="popular-services">
        <div className="container">
          <h2>Популярні послуги</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <h3>Буст рангу</h3>
              <p>Швидке підвищення рангу в CS2, Valorant, LoL, Dota 2</p>
              <div className="service-price">від $10</div>
              <button className="btn-service">
                <Link to="/checkout" className="nav-link">
                  Замовити
                </Link>
              </button>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-user-circle"></i>
              </div>
              <h3>Продаж акаунтів</h3>
              <p>Готові акаунти з високим рангом та майном</p>
              <div className="service-price">від $10</div>
              <button className="btn-service">
                <Link to="/checkout" className="nav-link">
                  Замовити
                </Link>
              </button>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-level-up-alt"></i>
              </div>
              <h3>Прокачка рівня</h3>
              <p>Швидка прокачка рівня та відкриття контенту</p>
              <div className="service-price">від $5</div>
              <button className="btn-service">
                <Link to="/checkout" className="nav-link">
                  Замовити
                </Link>
              </button>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-tasks"></i>
              </div>
              <h3>Виконання квестів</h3>
              <p>Проходження місій, квестів та челенджів</p>
              <div className="service-price">від $1</div>
              <button className="btn-service">
                <Link to="/checkout" className="nav-link">
                  Замовити
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="games-section">
        <div className="container">
          <h2>Підтримувані ігри</h2>
          <div className="games-grid">
            <div className="game-card">
              <img src="/images/photo1.jpg" alt="GTA San Andreas" />
              <span>GTA: San Andreas</span>
              <small>SAMP / MTA</small>
            </div>
            <div className="game-card">
              <img src="/images/photo2.jpg" alt="GTA V" />
              <span>GTA V</span>
              <small>Online / FiveM</small>
            </div>
            <div className="game-card">
              <img src="/images/photo3.jpg" alt="CS2" />
              <span>Counter-Strike 2</span>
              <small>CS2</small>
            </div>
            <div className="game-card">
              <img src="/images/photo4.jpg" alt="Valorant" />
              <span>Valorant</span>
              <small>Riot Games</small>
            </div>
            <div className="game-card">
              <img src="/images/photo5.jpg" alt="Dota 2" />
              <span>Dota 2</span>
              <small>Steam</small>
            </div>
            <div className="game-card">
              <img src="/images/photo6.jpg" alt="League of Legends" />
              <span>League of Legends</span>
              <small>LoL</small>
            </div>
            <div className="game-card">
              <img src="/images/photo7.jpg" alt="Rust" />
              <span>Rust</span>
              <small>Survival</small>
            </div>
            <div className="game-card">
              <img src="/images/photo8.jpg" alt="Clash of Clans" />
              <span>Clash of Clans/Royale</span>
              <small>Mobile</small>
            </div>
            <div className="game-card">
              <img src="/images/photo9.jpg" alt="Fortnite" />
              <span>Fortnite</span>
              <small>Battle Royale</small>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>Чому обирають нас?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Безпека акаунту</h3>
              <p>Гарантуємо повну безпеку вашого акаунту. Використовуємо VPN та інші методи захисту.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>Швидке виконання</h3>
              <p>Більшість замовлень виконуємо протягом 24-48 годин. Деякі послуги доступні миттєво.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-headset"></i>
              </div>
              <h3>Підтримка 24/7</h3>
              <p>Наша команда підтримки працює цілодобово, щоб допомогти вам з будь-якими питаннями.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-dollar-sign"></i>
              </div>
              <h3>Доступні ціни</h3>
              <p>Конкурентні ціни на всі послуги. Регулярні знижки та спеціальні пропозиції.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2>Відгуки клієнтів</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>"Швидко підняли ранг в CS2 з Silver до Global. Все чесно, без читів. Рекомендую!"</p>
              <div className="testimonial-author">
                <div>
                  <span className="author-name">👤️Олексій К.</span>
                  <span className="author-game">Counter-Strike 2</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>"Купив акаунт у Fortnite з OG скінами. Все як обіцяли, дуже задоволений!"</p>
              <div className="testimonial-author">
                <div>
                  <span className="author-name">👤️Марія В.</span>
                  <span className="author-game">Fortnite</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>"Прокачали MMR в Dota 2 з 2k до 5k. Професійно та швидко!"</p>
              <div className="testimonial-author">
                <div>
                  <span className="author-name">👤️Дмитро П.</span>
                  <span className="author-game">Dota 2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
