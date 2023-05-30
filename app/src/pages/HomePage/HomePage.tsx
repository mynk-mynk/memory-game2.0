import React from 'react';
import styles from './HomePage.module.css';
import { NavLink } from 'react-router-dom';
import { Card } from '../../components/card/card';
import { allOwlSrc } from '../../assets/owls/owls';

export function HomePage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.header}>Train your brain</h1>
      <nav className={styles.navigation}>
        <NavLink to={'/game'}>game</NavLink>
        <NavLink to={'/winners'}>top 10</NavLink>
      </nav>
      <div className={styles['cards-container']}>
        {allOwlSrc.map((src, i) => (
          <Card key={src} owlSrc={src} index={i + 1} />
        ))}
      </div>
    </div>
  );
}
