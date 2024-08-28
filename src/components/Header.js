import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';

function Header() {
  // Add Logo and theme switcher
  return(
    <header className={styles.Header}>
      <h1>Kevin Kuang</h1>
      <nav className={styles.links}>
        <Link to='/react-portfolio'>Home</Link>
        <Link to='/react-portfolio/Portfolio'>Portfolio</Link>
      </nav>
    </header>
  );
};

export default Header;