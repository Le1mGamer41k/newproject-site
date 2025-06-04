"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Services = () => {
  const [filters, setFilters] = useState({
    game: "",
    service: "",
    price: "",
  })
  
  const { user } = useAuth()
  const navigate = useNavigate()

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }))
  }

  const handleOrderClick = (e) => {
    if (!user) {
      e.preventDefault()
      navigate('/login')
    }
  }

  const applyFilters = () => {
    const serviceCards = document.querySelectorAll(".service-card-detailed")

    serviceCards.forEach((card) => {
      const cardGame = card.getAttribute("data-game")
      const cardService = card.getAttribute("data-service")
      const cardPrice = Number.parseInt(card.getAttribute("data-price"))

      let showCard = true

      if (filters.game && cardGame !== filters.game) {
        showCard = false
      }

      if (filters.service && cardService !== filters.service) {
        showCard = false
      }

      if (filters.price) {
        if (filters.price === "1-10" && (cardPrice < 1 || cardPrice > 10)) {
          showCard = false
        } else if (filters.price === "10-50" && (cardPrice < 10 || cardPrice > 50)) {
          showCard = false
        } else if (filters.price === "50-100" && (cardPrice < 50 || cardPrice > 100)) {
          showCard = false
        } else if (filters.price === "100+" && cardPrice < 100) {
          showCard = false
        }
      }

      card.style.display = showCard ? "block" : "none"
    })
  }

  return (
    <>
      {/* Services Header */}
      <section className="services-header">
        <div className="container">
          <h1>Наші послуги</h1>
          <p>Обирайте з широкого спектру професійних ігрових послуг</p>
        </div>
      </section>

      {/* Filters */}
      <section className="filters-section">
        <div className="container">
          <div className="filters">
            <div className="filter-group">
              <label>Гра:</label>
              <select value={filters.game} onChange={(e) => handleFilterChange("game", e.target.value)}>
                <option value="">Всі ігри</option>
                <option value="gta-sa">GTA: San Andreas</option>
                <option value="gta-v">GTA V</option>
                <option value="cs2">Counter-Strike 2</option>
                <option value="valorant">Valorant</option>
                <option value="dota2">Dota 2</option>
                <option value="lol">League of Legends</option>
                <option value="rust">Rust</option>
                <option value="clash">Clash of Clans/Royale</option>
                <option value="fortnite">Fortnite</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Тип послуги:</label>
              <select value={filters.service} onChange={(e) => handleFilterChange("service", e.target.value)}>
                <option value="">Всі послуги</option>
                <option value="boost">Буст рангу</option>
                <option value="account">Продаж акаунтів</option>
                <option value="leveling">Прокачка рівня</option>
                <option value="quests">Виконання квестів</option>
                <option value="items">Продаж предметів</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Ціна:</label>
              <select value={filters.price} onChange={(e) => handleFilterChange("price", e.target.value)}>
                <option value="">Будь-яка ціна</option>
                <option value="1-10">$1 - $10</option>
                <option value="10-50">$10 - $50</option>
                <option value="50-100">$50 - $100</option>
                <option value="100+">$100+</option>
              </select>
            </div>
            <button className="btn-filter" onClick={applyFilters}>
              Застосувати фільтри
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-catalog">
        <div className="container">
          <div className="services-grid-detailed">
            {/* GTA San Andreas Services */}
            <div className="service-card-detailed" data-game="gta-sa" data-service="account" data-price="25">
              <div className="service-header">
                <img src="images/photo1.jpg" alt="GTA San Andreas" className="game-icon" />
                <div className="service-info">
                  <h3>GTA SA - Продаж акаунтів</h3>
                  <span className="service-category">GTA: San Andreas (SAMP/MTA)</span>
                </div>
                <div className="service-price">$3-$50</div>
              </div>
              <div className="service-description">
                <p>Готові акаунти для SAMP та MTA серверів з різним рівнем прокачки та майном.</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> Різні рівні персонажів</li>
                  <li><i className="fas fa-check"></i> Майно та транспорт</li>
                  <li><i className="fas fa-check"></i> Гарантія безпеки</li>
                </ul>
              </div>
              <div className="service-footer">
                <div className="service-rating">
                  <i className="fas fa-star"></i>
                  <span>4.8 (45 відгуків)</span>
                </div>
                <button className="btn-order" onClick={handleOrderClick}>
                  {user ? (
                    <Link to="/checkout" className="nav-link">Замовити</Link>
                  ) : (
                    <span><i className="fas fa-lock"></i> Увійти для замовлення</span>
                  )}
                </button>
              </div>
            </div>

            <div className="service-card-detailed" data-game="gta-sa" data-service="quests" data-price="5">
              <div className="service-header">
                <img src="images/photo1.jpg" alt="GTA San Andreas" className="game-icon" />
                <div className="service-info">
                  <h3>GTA SA - Виконання квестів</h3>
                  <span className="service-category">GTA: San Andreas (SAMP/MTA)</span>
                </div>
                <div className="service-price">$1-$10</div>
              </div>
              <div className="service-description">
                <p>Виконання різних робіт та квестів на SAMP/MTA серверах для заробітку грошей та досвіду.</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> Всі види робіт</li>
                  <li><i className="fas fa-check"></i> Швидке виконання</li>
                  <li><i className="fas fa-check"></i> Доступні ціни</li>
                </ul>
              </div>
              <div className="service-footer">
                <div className="service-rating">
                  <i className="fas fa-star"></i>
                  <span>4.7 (32 відгуки)</span>
                </div>
                <button className="btn-order" onClick={handleOrderClick}>
                  {user ? (
                    <Link to="/checkout" className="nav-link">Замовити</Link>
                  ) : (
                    <span><i className="fas fa-lock"></i> Увійти для замовлення</span>
                  )}
                </button>
              </div>
            </div>

            {/* GTA V Services */}
            <div className="service-card-detailed" data-game="gta-v" data-service="leveling" data-price="25">
              <div className="service-header">
                <img src="images/photo2.jpg" alt="GTA V" className="game-icon" />
                <div className="service-info">
                  <h3>GTA V - Прокачка рівня</h3>
                  <span className="service-category">GTA V (Online/FiveM)</span>
                </div>
                <div className="service-price">$5-$50</div>
              </div>
              <div className="service-description">
                <p>Швидка прокачка рівня персонажа в GTA Online та на FiveM серверах.</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> Легальні методи</li>
                  <li><i className="fas fa-check"></i> Швидкий результат</li>
                  <li><i className="fas fa-check"></i> Безпека акаунту</li>
                </ul>
              </div>
              <div className="service-footer">
                <div className="service-rating">
                  <i className="fas fa-star"></i>
                  <span>4.9 (78 відгуків)</span>
                </div>
                <button className="btn-order" onClick={handleOrderClick}>
                  {user ? (
                    <Link to="/checkout" className="nav-link">Замовити</Link>
                  ) : (
                    <span><i className="fas fa-lock"></i> Увійти для замовлення</span>
                  )}
                </button>
              </div>
            </div>

            <div className="service-card-detailed" data-game="gta-v" data-service="account" data-price="65">
              <div className="service-header">
                <img src="images/photo2.jpg" alt="GTA V" className="game-icon" />
                <div className="service-info">
                  <h3>GTA V - Продаж акаунтів</h3>
                  <span className="service-category">GTA V (Online/FiveM)</span>
                </div>
                <div className="service-price">$10-$120+</div>
              </div>
              <div className="service-description">
                <p>Акаунти з високим рівнем, майном, транспортом та грошима в GTA Online.</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> Багато майна</li>
                  <li><i className="fas fa-check"></i> Преміум транспорт</li>
                  <li><i className="fas fa-check"></i> Мільйони в банку</li>
                </ul>
              </div>
              <div className="service-footer">
                <div className="service-rating">
                  <i className="fas fa-star"></i>
                  <span>4.8 (56 відгуків)</span>
                </div>
                <button className="btn-order" onClick={handleOrderClick}>
                  {user ? (
                    <Link to="/checkout" className="nav-link">Замовити</Link>
                  ) : (
                    <span><i className="fas fa-lock"></i> Увійти для замовлення</span>
                  )}
                </button>
              </div>
            </div>

            {/* Counter-Strike 2 Services */}
            <div className="service-card-detailed" data-game="cs2" data-service="boost" data-price="65">
              <div className="service-header">
                <img src="images/photo3.jpg" alt="CS2" className="game-icon" />
                <div className="service-info">
                  <h3>CS2 - Буст рангу</h3>
                  <span className="service-category">Counter-Strike 2</span>
                </div>
                <div className="service-price">$10-$120</div>
              </div>
              <div className="service-description">
                <p>Професійний буст рангу від Silver до Global Elite в Counter-Strike 2.</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> Всі ранги доступні</li>
                  <li><i className="fas fa-check"></i> Швидке виконання</li>
                  <li><i className="fas fa-check"></i> Без читів</li>
                </ul>
              </div>
              <div className="service-footer">
                <div className="service-rating">
                  <i className="fas fa-star"></i>
                  <span>4.9 (134 відгуки)</span>
                </div>
                <button className="btn-order" onClick={handleOrderClick}>
                  {user ? (
                    <Link to="/checkout" className="nav-link">Замовити</Link>
                  ) : (
                    <span><i className="fas fa-lock"></i> Увійти для замовлення</span>
                  )}
                </button>
              </div>
            </div>

            <div className="service-card-detailed" data-game="cs2" data-service="boost" data-price="105">
              <div className="service-header">
                <img src="images/photo3.jpg" alt="CS2" className="game-icon" />
                <div className="service-info">
                  <h3>CS2 - Premier рейтинг</h3>
                  <span className="service-category">Counter-Strike 2</span>
                </div>
                <div className="service-price">$10-$200+</div>
              </div>
              <div className="service-description">
                <p>Буст Premier рейтингу від 0 до 25k+ очок в новій системі рангів CS2.</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> Нова система рангів</li>
                  <li><i className="fas fa-check"></i> Високий рейтинг</li>
                  <li><i className="fas fa-check"></i> Професійні гравці</li>
                </ul>
              </div>
              <div className="service-footer">
                <div className="service-rating">
                  <i className="fas fa-star"></i>
                  <span>4.8 (89 відгуків)</span>
                </div>
                <button className="btn-order" onClick={handleOrderClick}>
                  {user ? (
                    <Link to="/checkout" className="nav-link">Замовити</Link>
                  ) : (
                    <span><i className="fas fa-lock"></i> Увійти для замовлення</span>
                  )}
                </button>
              </div>
            </div>

            {/* Valorant Services */}
            <div className="service-card-detailed" data-game="valorant" data-service="boost" data-price="95">
              <div className="service-header">
                <img src="images/photo4.jpg" alt="Valorant" className="game-icon" />
                <div className="service-info">
                  <h3>Valorant - Буст рангу</h3>
                  <span className="service-category">Valorant</span>
                </div>
                <div className="service-price">$10-$180+</div>
              </div>
              <div className="service-description">
                <p>Буст рангу від Iron до Radiant в Valorant від професійних гравців.</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> Всі ранги</li>
                  <li><i className="fas fa-check"></i> Швидко та безпечно</li>
                  <li><i className="fas fa-check"></i> Гарантія результату</li>
                </ul>
              </div>
              <div className="service-footer">
                <div className="service-rating">
                  <i className="fas fa-star"></i>
                  <span>4.9 (156 відгуків)</span>
                </div>
                <button className="btn-order" onClick={handleOrderClick}>
                  {user ? (
                    <Link to="/checkout" className="nav-link">Замовити</Link>
                  ) : (
                    <span><i className="fas fa-lock"></i> Увійти для замовлення</span>
                  )}
                </button>
              </div>
            </div>

            <div className="service-card-detailed" data-game="valorant" data-service="account" data-price="55">
              <div className="service-header">
                <img src="images/photo4.jpg" alt="Valorant" className="game-icon" />
                <div className="service-info">
                  <h3>Valorant - Продаж акаунтів</h3>
                  <span className="service-category">Valorant</span>
                </div>
                <div className="service-price">$10-$100+</div>
              </div>
              <div className="service-description">
                <p>Готові акаунти Valorant з різними рангами та скінами.</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> Різні ранги</li>
                  <li><i className="fas fa-check"></i> Рідкісні скіни</li>
                  <li><i className="fas fa-check"></i> Повний доступ</li>
                </ul>
              </div>
              <div className="service-footer">
                <div className="service-rating">
                  <i className="fas fa-star"></i>
                  <span>4.7 (92 відгуки)</span>
                </div>
                <button className="btn-order" onClick={handleOrderClick}>
                  {user ? (
                    <Link to="/checkout" className="nav-link">Замовити</Link>
                  ) : (
                    <span><i className="fas fa-lock"></i> Увійти для замовлення</span>
                  )}
                </button>
              </div>
            </div>

            {/* Dota 2 Services */}
            <div className="service-card-detailed" data-game="dota2" data-service="boost" data-price="155">
              <div className="service-header">
                <img src="images/photo5.jpg" alt="Dota 2" className="game-icon" />
                <div className="service-info">
                  <h3>Dota 2 - MMR Boost</h3>
                  <span className="service-category">Dota 2</span>
                </div>
                <div className="service-price">$10-$300</div>
              </div>
              <div className="service-description">
                <p>Підвищення MMR від 1k до 8k від професійних гравців Dota 2.</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> Високий MMR</li>
                  <li><i className="fas fa-check"></i> Досвідчені гравці</li>
                  <li><i className="fas fa-check"></i> Швидкий результат</li>
                </ul>
              </div>
              <div className="service-footer">
                <div className="service-rating">
                  <i className="fas fa-star"></i>
                  <span>4.8 (73 відгуки)</span>
                </div>
                <button className="btn-order" onClick={handleOrderClick}>
                  {user ? (
                    <Link to="/checkout" className="nav-link">Замовити</Link>
                  ) : (
                    <span><i className="fas fa-lock"></i> Увійти для замовлення</span>
                  )}
                </button>
              </div>
            </div>

            {/* League of Legends Services */}
            <div className="service-card-detailed" data-game="lol" data-service="boost" data-price="200">
              <div className="service-header">
                <img src="images/photo6.jpg" alt="League of Legends" className="game-icon" />
                <div className="service-info">
                  <h3>LoL - Буст рангу</h3>
                  <span className="service-category">League of Legends</span>
                </div>
                <div className="service-price">$15-$400+</div>
              </div>
              <div className="service-description">
                <p>Професійний буст рангу в League of Legends від Iron до Challenger.</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> Всі ранги</li>
                  <li><i className="fas fa-check"></i> Швидке виконання</li>
                  <li><i className="fas fa-check"></i> Безпека акаунту</li>
                </ul>
              </div>
              <div className="service-footer">
                <div className="service-rating">
                  <i className="fas fa-star"></i>
                  <span>4.9 (187 відгуків)</span>
                </div>
                <button className="btn-order" onClick={handleOrderClick}>
                  {user ? (
                    <Link to="/checkout" className="nav-link">Замовити</Link>
                  ) : (
                    <span><i className="fas fa-lock"></i> Увійти для замовлення</span>
                  )}
                </button>
              </div>
            </div>

            {/* Fortnite Services */}
            <div className="service-card-detailed" data-game="fortnite" data-service="account" data-price="265">
              <div className="service-header">
                <img src="images/photo9.jpg" alt="Fortnite" className="game-icon" />
                <div className="service-info">
                  <h3>Fortnite - OG акаунти</h3>
                  <span className="service-category">Fortnite</span>
                </div>
                <div className="service-price">$30-$500+</div>
              </div>
              <div className="service-description">
                <p>Рідкісні акаунти Fortnite з OG скінами та ексклюзивними предметами.</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> OG скіни</li>
                  <li><i className="fas fa-check"></i> Рідкісні предмети</li>
                  <li><i className="fas fa-check"></i> Повна гарантія</li>
                </ul>
              </div>
              <div className="service-footer">
                <div className="service-rating">
                  <i className="fas fa-star"></i>
                  <span>4.8 (64 відгуки)</span>
                </div>
                <button className="btn-order" onClick={handleOrderClick}>
                  {user ? (
                    <Link to="/checkout" className="nav-link">Замовити</Link>
                  ) : (
                    <span><i className="fas fa-lock"></i> Увійти для замовлення</span>
                  )}
                </button>
              </div>
            </div>

            {/* Rust Services */}
            <div className="service-card-detailed" data-game="rust" data-service="items" data-price="25">
              <div className="service-header">
                <img src="images/photo7.jpg" alt="Rust" className="game-icon" />
                <div className="service-info">
                  <h3>Rust - Ресурси та зброя</h3>
                  <span className="service-category">Rust</span>
                </div>
                <div className="service-price">$5-$50</div>
              </div>
              <div className="service-description">
                <p>Продаж ресурсів, зброї та спорядження для виживання в Rust.</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> Різні пакети</li>
                  <li><i className="fas fa-check"></i> Швидка доставка</li>
                  <li><i className="fas fa-check"></i> Якісна зброя</li>
                </ul>
              </div>
              <div className="service-footer">
                <div className="service-rating">
                  <i className="fas fa-star"></i>
                  <span>4.6 (38 відгуків)</span>
                </div>
                <button className="btn-order" onClick={handleOrderClick}>
                  {user ? (
                    <Link to="/checkout" className="nav-link">Замовити</Link>
                  ) : (
                    <span><i className="fas fa-lock"></i> Увійти для замовлення</span>
                  )}
                </button>
              </div>
            </div>

            {/* Clash of Clans Services */}
            <div className="service-card-detailed" data-game="clash" data-service="account" data-price="105">
              <div className="service-header">
                <img src="images/photo8.jpg" alt="Clash of Clans" className="game-icon" />
                <div className="service-info">
                  <h3>Clash - Продаж акаунтів</h3>
                  <span className="service-category">Clash of Clans/Royale</span>
                </div>
                <div className="service-price">$10-$200+</div>
              </div>
              <div className="service-description">
                <p>Готові акаунти Clash of Clans та Clash Royale з високим рівнем та ресурсами.</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> Високий рівень</li>
                  <li><i className="fas fa-check"></i> Багато ресурсів</li>
                  <li><i className="fas fa-check"></i> Рідкісні карти</li>
                </ul>
              </div>
              <div className="service-footer">
                <div className="service-rating">
                  <i className="fas fa-star"></i>
                  <span>4.7 (51 відгук)</span>
                </div>
                <button className="btn-order" onClick={handleOrderClick}>
                  {user ? (
                    <Link to="/checkout" className="nav-link">Замовити</Link>
                  ) : (
                    <span><i className="fas fa-lock"></i> Увійти для замовлення</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Не знайшли потрібну послугу?</h2>
            <p>Зв'яжіться з нами, і ми знайдемо рішення для ваших потреб</p>
            <a href="https://t.me/galyna" className="btn-primary" target="_blank" rel="noopener noreferrer">
              Зв'язатися з нами
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
