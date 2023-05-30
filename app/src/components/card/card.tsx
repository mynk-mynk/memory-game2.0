import React from 'react';
import styles from './card.module.css';

interface IProps {
  owlSrc: string;
  index: number;
}

export function Card({ owlSrc, index }: IProps) {
  return (
    <div className={styles.card}>
      <img className={styles.cardImg} src={owlSrc} alt={'Owl_' + index} />
    </div>
  );
}
