import React from 'react';
import styles from '@/app/page.module.css';
import { Metadata } from 'next';
import Contacts from '@/components/Contacts';

export const metadata: Metadata = {
  title: 'АвтоФеррум | Контакты',
  description: 'СТО твоей мечты',
  icons: '/svg/logo_ferrumauto.svg',
};

export default function page() {
  return (
    <main className={styles.main}>
      <Contacts />
    </main>
  );
}
