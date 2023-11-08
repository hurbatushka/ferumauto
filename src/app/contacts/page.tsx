import React from 'react';
import styles from '@/app/page.module.css';
import { Metadata } from 'next';
import Contacts from '@/components/Contacts';

export const metadata: Metadata = {
  title: 'ФеррумАвто | Контакты',
  description: 'СТО твоей мечты',
};

export default function page() {
  return (
    <main className={styles.main}>
      <Contacts />
    </main>
  );
}
