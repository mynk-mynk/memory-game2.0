import React from 'react';
import styles from './WinnersTable.module.css';

export function WinnersTable() {
  return (
    <table className={styles.table}>
      <tr className={styles['table-row-header']}>
        <th>Name</th>
        <th>Date</th>
        <th>Moves</th>
        <th>Time</th>
      </tr>
      <tr className={styles['table-row']}>
        <td>Player 1</td>
        <td>30/05/2023 14:34:19</td>
        <td>50</td>
        <td>2:00</td>
      </tr>
    </table>
  );
}
