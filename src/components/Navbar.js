import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="container nav-content">
      <a href="#home" className="logo">DonerHit</a>
      <ul className="nav-links">
        <li><a href="#menu">Меню</a></li>
        <li><a href="#contacts">Контакты</a></li>
        <li><a href="#auth">Личный кабинет</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
