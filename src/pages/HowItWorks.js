"use client"

import { useEffect } from "react"

const HowItWorks = () => {
  useEffect(() => {
    // FAQ Accordion functionality
    const faqItems = document.querySelectorAll(".faq-item")

    const handleFaqClick = (item) => {
      return () => {
        // Close all other FAQ items
        faqItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove("active")
          }
        })

        // Toggle current item
        item.classList.toggle("active")
      }
    }

    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question")
      const clickHandler = handleFaqClick(item)
      question.addEventListener("click", clickHandler)

      // Store handler for cleanup
      question._clickHandler = clickHandler
    })

    // Cleanup
    return () => {
      faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question")
        if (question && question._clickHandler) {
          question.removeEventListener("click", question._clickHandler)
        }
      })
    }
  }, [])

  return (
    <>
      {/* How It Works Header */}
      <section className="how-it-works-header">
        <div className="container">
          <h1>Як це працює</h1>
          <p>Простий та зрозумілий процес замовлення послуг</p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="steps-section">
        <div className="container">
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3>Оберіть послугу</h3>
              <p>
                Перегляньте наш каталог послуг та оберіть те, що вам потрібно. Використовуйте фільтри для швидкого
                пошуку.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-icon">
                <i className="fas fa-user-plus"></i>
              </div>
              <h3>Створіть акаунт</h3>
              <p>Зареєструйтеся на нашому сайті або увійдіть в існуючий акаунт. Це займе лише кілька хвилин.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-icon">
                <i className="fas fa-credit-card"></i>
              </div>
              <h3>Оплатіть замовлення</h3>
              <p>Оберіть зручний спосіб оплати: банківська карта, PayPal, криптовалюта або інші доступні методи.</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <div className="step-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <h3>Виконання роботи</h3>
              <p>
                Наші професійні гравці розпочинають роботу над вашим замовленням. Ви можете відстежувати прогрес в
                реальному часі.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">5</div>
              <div className="step-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <h3>Отримайте результат</h3>
              <p>
                Після завершення роботи ви отримаєте повідомлення та зможете перевірити результат. Гарантуємо якість!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="security-section">
        <div className="container">
          <div className="security-content">
            <div className="security-text">
              <h2>Безпека вашого акаунту</h2>
              <p>
                Ми розуміємо, наскільки важливий для вас ваш ігровий акаунт. Тому ми використовуємо найсучасніші методи
                захисту:
              </p>
              <ul className="security-features">
                <li>
                  <i className="fas fa-shield-alt"></i> VPN захист для приховування IP-адреси
                </li>
                <li>
                  <i className="fas fa-lock"></i> Шифрування всіх даних акаунту
                </li>
                <li>
                  <i className="fas fa-user-secret"></i> Конфіденційність особистої інформації
                </li>
                <li>
                  <i className="fas fa-clock"></i> Імітація звичайного геймплею
                </li>
                <li>
                  <i className="fas fa-ban"></i> Ніяких сторонніх програм
                </li>
              </ul>
            </div>
            <div className="security-image">
              <img src="/images/sec1.jpg" alt="Security illustration" />
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="payment-section">
        <div className="container">
          <h2>Способи оплати</h2>
          <div className="payment-grid">
            <div className="payment-card">
              <i className="fab fa-cc-visa"></i>
              <h3>Банківські карти</h3>
              <p>Visa, MasterCard, Maestro</p>
            </div>
            <div className="payment-card">
              <i className="fab fa-paypal"></i>
              <h3>PayPal</h3>
              <p>Швидко та безпечно</p>
            </div>
            <div className="payment-card">
              <i className="fab fa-bitcoin"></i>
              <h3>Криптовалюта</h3>
              <p>Bitcoin, Ethereum, USDT</p>
            </div>
            <div className="payment-card">
              <i className="fas fa-mobile-alt"></i>
              <h3>Мобільні платежі</h3>
              <p>Apple Pay, Google Pay</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Часті питання</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <div className="faq-question">
                <h3>Чи безпечно довіряти свій акаунт?</h3>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>
                  Так, абсолютно безпечно. Ми використовуємо VPN, шифрування даних та інші методи захисту. За 5+ років
                  роботи не було жодного випадку блокування акаунту клієнта.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>Скільки часу займає виконання замовлення?</h3>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>
                  Час виконання залежить від типу послуги. Прості завдання - 1-24 години, буст рангу - 1-7 днів, складні
                  замовлення - до 2 тижнів.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>Що робити, якщо я не задоволений результатом?</h3>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>
                  Ми гарантуємо якість всіх наших послуг. Якщо результат не відповідає заявленому, ми безкоштовно
                  виправимо недоліки або повернемо гроші.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>Чи можу я спілкуватися з виконавцем?</h3>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>
                 Так, у вас є можливість спілкуватись з виконавцем, обирає відповідний чат для спілкування та спілкуєтесь. Ви можете задавати питання та отримувати оновлення про прогрес роботи.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>Які гарантії ви надаєте?</h3>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>
                  Ми гарантуємо виконання замовлення, безпеку акаунту, конфіденційність даних та повернення коштів у разі невиконання умов.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>Чи працюєте ви з усіма серверами/регіонами?</h3>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>
                  Ми працюємо з більшістю популярних серверів та регіонів. Уточнюйте доступність для вашого регіону при оформленні замовлення.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="support-section">
        <div className="container">
          <div className="support-content">
            <h2>Потрібна допомога?</h2>
            <p>Наша команда підтримки працює 24/7, щоб допомогти вам з будь-якими питаннями</p>
            <div className="support-methods">
              <div className="support-method">
                <i className="fas fa-comments"></i>
                <h3>Онлайн чат</h3>
                <p>Миттєва відповідь</p>
              </div>
              <div className="support-method">
                <i className="fab fa-discord"></i>
                <h3>Discord</h3>
                <p>Спільнота та підтримка</p>
              </div>
              <div className="support-method">
                <i className="fas fa-envelope"></i>
                <h3>Email</h3>
                <p>support@gameboost.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HowItWorks
