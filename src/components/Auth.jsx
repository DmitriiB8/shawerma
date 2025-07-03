// src/components/Auth/Auth.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Auth.module.css';

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', confirm: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage('');
    setFormData({ email: '', password: '', confirm: '' });
  }, [isRegister]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRegister = e => {
    e.preventDefault();
    const { email, password, confirm } = formData;
    if (password !== confirm) {
      setMessage('Пароли не совпадают');
      return;
    }
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    if (users[email]) {
      setMessage('Пользователь уже зарегистрирован');
      return;
    }
    users[email] = password;
    localStorage.setItem('users', JSON.stringify(users));
    setMessage('Регистрация прошла успешно. Войдите.');
    setIsRegister(false);
  };

  const handleLogin = e => {
    e.preventDefault();
    const { email, password } = formData;
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    if (users[email] !== password) {
      setMessage('Неверный email или пароль');
      return;
    }
    localStorage.setItem('currentUser', email);
    setMessage(`Добро пожаловать, ${email}`);
  };

  return (
    <section id="auth" className={styles.authSection}>
      <h2>{isRegister ? 'Регистрация' : 'Вход'}</h2>

      <div className={styles.toggle}>
        <button
          className={!isRegister ? styles.active : ''}
          onClick={() => setIsRegister(false)}
        >
          Войти
        </button>
        <button
          className={isRegister ? styles.active : ''}
          onClick={() => setIsRegister(true)}
        >
          Зарегистрироваться
        </button>
      </div>

      <motion.form
        className={styles.form}
        onSubmit={isRegister ? handleRegister : handleLogin}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {isRegister && (
          <input
            type="password"
            name="confirm"
            placeholder="Подтвердите пароль"
            value={formData.confirm}
            onChange={handleChange}
            required
          />
        )}

        <motion.button
          type="submit"
          className={styles.submitBtn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isRegister ? 'Зарегистрироваться' : 'Войти'}
        </motion.button>
      </motion.form>

      {message && <p className={styles.message}>{message}</p>}
    </section>
  );
};

export default Auth;
