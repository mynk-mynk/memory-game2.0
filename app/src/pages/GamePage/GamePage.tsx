import React from 'react';
import styles from './GamePage.module.css';
import { Card } from '../../components/card/card';
import { allOwlSrc } from '../../assets/owls/owls';

export function GamePage() {
  return (
    <div className="page-layout">
      <div className={styles['card-container']}>
        {allOwlSrc.map((src, i) => (
          <Card key={src} owlSrc={src} index={i + 1} />
        ))}
      </div>
    </div>
  );
}

// export default GamePage;
