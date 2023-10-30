import React from 'react';
import styles from './Advantages.module.scss';
import Image from 'next/image';

import SectionName from '../SectionName';

const data = [
  {
    id: 1,
    image: '/advantages/money.svg',
    label: 'Безналичный расчет',
    description:
      'Мы принимаем наличный и безналичный расчет, предоставляя удобный и гибкий метод оплаты для наших клиентов',
    urlAbout: '/advantages-about/' + 1,
  },
  {
    id: 2,
    image: '/advantages/hand.svg',
    label: 'Юридическим лицам',
    description:
      'Мы также работаем с юридическими лицами, что позволяет нам обслуживать как частных владельцев автомобилей, так и предприятия с автопарками',
    urlAbout: '/advantages-about/' + 2,
  },
  {
    id: 3,
    image: '/advantages/wrench.svg',
    label: 'Квалифицированные специалисты',
    description:
      'Наша команда состоит из квалифицированных специалистов, которые обладают высоким уровнем профессионализма и знаний в области автосервиса.',
    urlAbout: '/advantages-about/' + 3,
  },
  {
    id: 4,
    image: '/advantages/clock.svg',
    label: 'Качество наше второе имя',
    description:
      'Мы ценим ваше время и стремимся к оперативному и качественному обслуживанию, чтобы вы смогли вернуться к своим повседневным делам как можно скорее.',
    urlAbout: '/advantages-about/' + 3,
  },
];

export default function () {
  return (
    <>
      <div className={styles.container}>
        <h4>НАШИ ПРЕИМУЩЕСТВА</h4>
        <h1>БЕСПЛАТНАЯ ДИАГНОСТИКА</h1>
      </div>
      <div className={styles.grid}>
        {data.map((item, index) => (
          <div className={styles.container_card}>
            <Image
              className={styles.advantage_icon}
              src={item.image}
              alt={item.label}
              width={150}
              height={150}
            />
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
