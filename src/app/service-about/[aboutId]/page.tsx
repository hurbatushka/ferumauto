import React from 'react';
import styles from '@/app/page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ФеруммАвто | Запчасти',
  description: 'СТО твоей мечты',
  icons: '/svg/logo_ferrumauto.svg',
};

interface IAboutParams {
  params: {
    aboutId: number;
  };
}

export default function AboutService({ params }: IAboutParams) {
  return <main className={styles.main}>О сервисе №{params.aboutId}</main>;
}
