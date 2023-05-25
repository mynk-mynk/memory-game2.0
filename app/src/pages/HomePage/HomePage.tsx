import React from 'react';
import styles from './HomePage.module.css';
import { NavLink } from 'react-router-dom';

export function HomePage() {
  return (
    <nav className={styles.container}>
      <NavLink to={'/game'}>game</NavLink>
      <NavLink to={'/winners'}>top 10</NavLink>
    </nav>
  );
}

// export default HomePage;
