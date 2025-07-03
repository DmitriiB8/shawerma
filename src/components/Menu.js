import React from 'react';
import menuData from '../data/menuData';
import MenuItem from './MenuItem';
import './Menu.css';

const Menu = () => (
  <section id="menu" className="menu container">
    <h2>Наше меню</h2>
    <div className="menu-grid">
      {menuData.map(item => (
        <MenuItem key={item.id} {...item} />
      ))}
    </div>
  </section>
);

export default Menu;
