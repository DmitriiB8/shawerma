import React from 'react';
import './Contacts.css';
import { motion } from 'framer-motion';

const Contacts = () => (
  <section id="contacts" className="contacts container">
    <h2>Контакты</h2>
    <div className="contacts-content">
      <motion.div
        className="info"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="info-item">
          <h3>Адрес</h3>
          <p>ул. Примерная, 12<br/>Тирасполь, Молдова</p>
        </div>
        <div className="info-item">
          <h3>Часы работы</h3>
          <p>Пн–Пт: 10:00–22:00<br/>Сб–Вс: 12:00–23:00</p>
        </div>
        <div className="info-item">
          <h3>Телефон</h3>
          <p>+373 555 12345</p>
        </div>
        <div className="info-item">
          <h3>Email</h3>
          <p>info@shawarmaland.md</p>
        </div>
        <motion.div
          className="map"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=Tiraspol%20Moldova&z=15&output=embed"
            allowFullScreen
            loading="lazy"
          />
        </motion.div>
      </motion.div>

      <motion.form
        className="contact-form"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        onSubmit={e => e.preventDefault()}
      >
        <input type="text" placeholder="Ваше имя" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Сообщение" rows="4" required />
        <motion.button
          type="submit"
          className="btn-send"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Отправить
        </motion.button>
      </motion.form>
    </div>
  </section>
);

export default Contacts;
