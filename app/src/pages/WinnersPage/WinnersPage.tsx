import React from 'react';
import styles from './WinnersPage.module.css';
import { WinnersTable } from '../../components/winnersTable/WinnersTable';

export function WinnersPage() {
  return (
    <div className="page-layout">
      <div className={styles['winners-container']}>
        <h1 className={styles.header}>Top Players:</h1>
        <WinnersTable />
      </div>
    </div>
  );
}
