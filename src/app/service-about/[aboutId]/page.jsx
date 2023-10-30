import React from 'react';
import styles from '../../page.module.css';

export default function AboutService({ params: { aboutId } }) {
  return <main className={styles.main}>О сервисе №{aboutId}</main>;
}
