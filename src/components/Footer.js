const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <i className="fas fa-gamepad"></i>
              <span>GameBoost</span>
            </div>
            <p>Професійні ігрові послуги для геймерів всіх рівнів</p>
            <div className="social-links">
              <a href="https://discord.com/invite/miabella7296" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-discord"></i>
              </a>
              <a href="viber://chat?0967616202">
                <i className="fab fa-viber"></i>
              </a>
              <a href="https://www.instagram.com/kud_galyna/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://t.me/galyna" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-telegram"></i>
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Послуги</h3>
            <ul>
              <li>
                <a href="https://68404dd00eed1e00082d786b--gameboostservice.netlify.app/services">Буст рангу</a>
              </li>
              <li>
                <a href="https://68404dd00eed1e00082d786b--gameboostservice.netlify.app/services">Продаж акаунтів</a>
              </li>
              <li>
                <a href="https://68404dd00eed1e00082d786b--gameboostservice.netlify.app/services">Прокачка рівня</a>
              </li>
              <li>
                <a href="https://68404dd00eed1e00082d786b--gameboostservice.netlify.app/services">Виконання квестів</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Підтримка</h3>
            <ul>
              <li>
                <a href="https://support.google.com/" target="_blank" rel="noopener noreferrer">
                  Центр допомоги
                </a>
              </li>
              <li>
                <a href="tel:+380684292967">Контакти</a>
              </li>
              <li>
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                  Політика конфіденційності
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Контакти</h3>
            <ul>
              <li>
                <i className="fas fa-envelope"></i> <a href="mailto:galynakud121@gmail.com">support@gameboost.com</a>
              </li>
              <li>
                <i className="fas fa-phone"></i> <a href="tel:+380684292967">+380 (99) 123-45-67</a>
              </li>
              <li>
                <i className="fas fa-clock"></i> 24/7 підтримка
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 GameBoost Service. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
