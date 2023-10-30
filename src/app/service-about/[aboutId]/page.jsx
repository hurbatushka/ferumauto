import React from 'react';
import styles from '@/app/page.module.css';

export default function AboutService({ params: { aboutId } }) {
  return <main className={styles.main}>О сервисе №{aboutId}</main>;
}
