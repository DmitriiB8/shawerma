import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Contacts from './components/Contacts';
import Auth from './components/Auth';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <Contacts />
      <Auth />
    </>
  );
}

export default App;
