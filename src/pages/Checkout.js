"use client"

import { useEffect } from "react"

const Checkout = () => {
  useEffect(() => {
    // Telegram button click tracking
    const telegramBtn = document.querySelector(".btn-telegram")

    if (telegramBtn) {
      const handleClick = () => {
        console.log("User clicked Telegram button")
        showNotification("Перенаправляємо в Telegram...", "info")
      }

      telegramBtn.addEventListener("click", handleClick)

      return () => {
        telegramBtn.removeEventListener("click", handleClick)
      }
    }
  }, [])

  const showNotification = (message, type = "info") => {
    const notification = document.createElement("div")
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background: ${type === "info" ? "#17a2b8" : "#28a745"};
      color: white;
      padding: 1rem 2rem;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.2);
      z-index: 10000;
      transform: translateX(100%);
      transition: transform 0.3s ease;
    `
    notification.textContent = message

    document.body.appendChild(notification)

    setTimeout(() => {
      notification.style.transform = "translateX(0)"
    }, 100)

    setTimeout(() => {
      notification.style.transform = "translateX(100%)"
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification)
        }
      }, 300)
    }, 3000)
  }

  return (
    <>
      {/* Telegram Contact Section */}
      <section className="telegram-payment">
        <div className="container">
          <div className="telegram-card">
            <div className="telegram-header">
              <h1>Оплата замовлення</h1>
              <p>Для замовлення та оплати послуг зв'яжіться з нами в Telegram</p>
            </div>

            <div className="telegram-contact">
              <div className="telegram-avatar">
                <i className="fab fa-telegram"></i>
              </div>
              <div className="telegram-info">
                <h2>GameBoost Support</h2>
                <p className="telegram-username">@gameboost_support</p>
                <div className="online-status">
                  <i className="fas fa-circle"></i>
                  <span>Онлайн зараз</span>
                </div>
              </div>
            </div>

            <a href="https://t.me/gameboost_support" target="_blank" rel="noopener noreferrer" className="btn-telegram">
              <i className="fab fa-telegram"></i>
              Перейти в Telegram
            </a>

            <div className="telegram-features">
              <div className="feature">
                <i className="fas fa-clock"></i>
                <span>Відповідь протягом 5 хвилин</span>
              </div>
              <div className="feature">
                <i className="fas fa-shield-alt"></i>
                <span>Безпечна оплата</span>
              </div>
              <div className="feature">
                <i className="fas fa-headset"></i>
                <span>Підтримка 24/7</span>
              </div>
            </div>

            <div className="payment-methods">
              <h3>Доступні способи оплати:</h3>
              <div className="methods-grid">
                <div className="method">
                  <i className="fas fa-credit-card"></i>
                  <span>Банківська карта</span>
                </div>
                <div className="method">
                  <i className="fab fa-paypal"></i>
                  <span>PayPal</span>
                </div>
                <div className="method">
                  <i className="fab fa-bitcoin"></i>
                  <span>Криптовалюта</span>
                </div>
                <div className="method">
                  <i className="fas fa-mobile-alt"></i>
                  <span>Мобільні платежі</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Checkout
