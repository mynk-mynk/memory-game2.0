import React from 'react';
import styles from './owlStartingImg.module.css';

interface IProps {
  owlSrc: string;
  index: number;
}

export function OwlStartingImg({ owlSrc, index }: IProps) {
  return <img className={styles.cardImg} src={owlSrc} alt={'Owl_' + index} />;
}
