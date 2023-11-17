'use client';
import React, { useEffect, useState } from 'react';
import styles from './ServiceWrapper.module.scss';

import Card from '../Card';
import SectionName from '../SectionName';
import axios from 'axios';

// const data = [
//   {
//     id: 1,
//     image: '/cards/kuz-rem.jpg',
//     label: 'КУЗОВНОЙ РЕМОНТ',
//     description:
//       'Восстановите первоначальное состояние вашего автомобиля с помощью профессиональных услуг по кузовному ремонту',
//     urlAbout: '/service-about/' + 1,
//   },
//   {
//     id: 2,
//     image: '/cards/engine.jpg',
//     label: 'РЕМОНТ ДВИГАТЕЛЯ',
//     description:
//       'Доверьте нам ремонт вашего двигателя и верните своему автомобилю его максимальную производительность',
//     urlAbout: '/service-about/' + 2,
//   },
//   {
//     id: 3,
//     image: '/cards/grm.jpg',
//     label: 'ЗАМЕНА РЕМНЕЙ И ГРМ',
//     description:
//       'Свяжитесь с нами сегодня, чтобы узнать больше о наших услугах по замене ремней и ГРМ. Наша команда с радостью поможет вам поддержать ваш автомобиль в отличной форме и гарантировать его надежную работу',
//     urlAbout: '/service-about/' + 3,
//   },
//   {
//     id: 4,
//     image: '/cards/oil.jpg',
//     label: 'ЗАМЕНА ЖИДКОСТЕЙ',
//     description:
//       'Свяжитесь с нами сегодня, чтобы узнать больше о наших услугах по замене ремней и ГРМ. Наша команда с радостью поможет вам поддержать ваш автомобиль в отличной форме и гарантировать его надежную работу',
//     urlAbout: '/service-about/' + 4,
//   },
//   {
//     id: 5,
//     image: '/cards/rul.jpg',
//     label: 'ПОДВЕСКА И РУЛЕВОЕ',
//     description:
//       'Восстановите первоначальное состояние вашего автомобиля с помощью профессиональных услуг по кузовному ремонту.',
//     urlAbout: '/service-about/' + 5,
//   },
//   {
//     id: 6,
//     image: '/cards/stop2.jpg',
//     label: 'ТОРМОЗНАЯ СИСТЕМА',
//     description:
//       'Восстановите первоначальное состояние вашего автомобиля с помощью профессиональных услуг по кузовному ремонту.',
//     urlAbout: '/service-about/' + 6,
//   },
//   {
//     id: 7,
//     image: '/cards/electric.jpg',
//     label: 'АВТОЭЛЕКТРИКА',
//     description:
//       'Восстановите первоначальное состояние вашего автомобиля с помощью профессиональных услуг по кузовному ремонту.',
//     urlAbout: '/service-about/' + 7,
//   },
//   {
//     id: 8,
//     image: '/cards/szepa.jpg',
//     label: 'СЦЕПЛЕНИЕ',
//     description:
//       'Восстановите первоначальное состояние вашего автомобиля с помощью профессиональных услуг по кузовному ремонту.',
//     urlAbout: '/service-about/' + 8,
//   },
//   {
//     id: 9,
//     image: '/cards/smoke.jpg',
//     label: 'ВЫХЛОПНАЯ СИСТЕМА',
//     description:
//       'Восстановите первоначальное состояние вашего автомобиля с помощью профессиональных услуг по кузовному ремонту.',
//     urlAbout: '/service-about/' + 9,
//   },
// ];

export default function () {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/services');
        const jsonData = response.data.services;
        console.log(jsonData);
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Убрал зависимость от data, чтобы избежать бесконечного цикла обновлений
  console.log(data);
  return (
    <>
      <SectionName name="УСЛУГИ" description="КАЧЕСТВЕННЫЕ УСЛУГИ ПО РЕМОНТУ АВТОМОБИЛЕЙ" />
      <div className={styles.grid}>
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </>
  );
}
