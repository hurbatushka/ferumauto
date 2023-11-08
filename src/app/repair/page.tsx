import React from 'react';
import styles from '../page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ФеррумАвто | Кузовной ремонт',
  description: 'СТО твоей мечты',
};

export default function page() {
  return <main className={styles.main}>Тут будет страница кузовного ремонта</main>;
}
