import React from 'react';
import { data } from '@/components/ServiceWrapper/data';
import Image from 'next/image';
import styles from '@/app/service-about/AboutId.module.scss';
import Button from '@/components/Button';
import Link from 'next/link';
// import styles from '@/app/page.module.css';

interface IAboutParams {
  params: {
    aboutId: string;
  };
}

export async function generateMetadata({ params }: any) {
  const serviceData = data.find((service) => service.id === params.aboutId);
  return {
    title: serviceData?.label,
    description: serviceData?.description,
    icons: '/svg/logo_ferrumauto.svg',
    keywords: serviceData?.keywords,
  };
}
export default function AboutService({ params }: IAboutParams) {
  const serviceData = data.find((service) => service.id === params.aboutId);

  if (!serviceData) {
    return (
      <div className={styles.main_found}>
        <h2>Упс! Ошибка 404 - Страница не найдена!</h2>
        <br />
        <p>
          Перейти на главную:{' '}
          <Link href="/" className={styles.urlnotfound}>
            Главная
          </Link>
        </p>
      </div>
    );
  }

  const { label, fulldescription, image } = serviceData;

  return (
    <main className={styles.main}>
      <div className={styles.imageContainer}>
        <Image src={image} alt={label} width={400} height={300} />
      </div>
      <div className={styles.contentContainer}>
        <h1>{label}</h1>
        <p>{fulldescription}</p>
      </div>
      <a href="tel:375293636020" className={styles.headermailtextcolor}>
        <Button value="+375293636020" />
      </a>
    </main>
  );
}
