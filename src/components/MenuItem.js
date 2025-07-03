import React from 'react';
import { motion } from 'framer-motion';
import './MenuItem.css';

const MenuItem = ({ name, description, price, image, icon }) => (
  <motion.div
    className="menu-item"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="img-wrapper">
      <img src={image} alt={name} />
    </div>
    <div className="info">
      <h3>{name}</h3>
      <p className="desc">{description}</p>
      <p className="price">{price}</p>
    </div>
  </motion.div>
);

export default MenuItem;
