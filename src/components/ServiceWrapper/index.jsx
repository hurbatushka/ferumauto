import React from 'react';
import styles from './ServiceWrapper.module.scss';

import Card from '../Card';
import SectionName from '../SectionName';

const data = [
  {
    id: 1,
    image: '/cards/kuz-rem.jpg',
    label: 'КУЗОВНОЙ РЕМОНТ',
    description:
      'Восстановите первоначальное состояние вашего автомобиля с помощью профессиональных услуг по кузовному ремонту',
    urlAbout: '/service-about/' + 1,
  },
  {
    id: 2,
    image: '/cards/engine.jpg',
    label: 'РЕМОНТ ДВИГАТЕЛЯ',
    description:
      'Доверьте нам ремонт вашего двигателя и верните своему автомобилю его максимальную производительность',
    urlAbout: '/service-about/' + 2,
  },
  {
    id: 3,
    image: '/cards/grm.jpg',
    label: 'ЗАМЕНА РЕМНЕЙ И ГРМ',
    description:
      'Восстановите первоначальное состояние вашего автомобиля с помощью профессиональных услуг по кузовному ремонту.',
    urlAbout: '/service-about/' + 3,
  },
  {
    id: 1,
    image: '/cards/kuz-rem.jpg',
    label: 'КУЗОВНОЙ РЕМОНТ',
    description:
      'Восстановите первоначальное состояние вашего автомобиля с помощью профессиональных услуг по кузовному ремонту',
    urlAbout: '/service-about/' + 1,
  },
  {
    id: 2,
    image: '/cards/engine.jpg',
    label: 'РЕМОНТ ДВИГАТЕЛЯ',
    description:
      'Доверьте нам ремонт вашего двигателя и верните своему автомобилю его максимальную производительность',
    urlAbout: '/service-about/' + 2,
  },
  {
    id: 3,
    image: '/cards/grm.jpg',
    label: 'ЗАМЕНА РЕМНЕЙ И ГРМ',
    description:
      'Восстановите первоначальное состояние вашего автомобиля с помощью профессиональных услуг по кузовному ремонту.',
    urlAbout: '/service-about/' + 3,
  },
  {
    id: 1,
    image: '/cards/kuz-rem.jpg',
    label: 'КУЗОВНОЙ РЕМОНТ',
    description:
      'Восстановите первоначальное состояние вашего автомобиля с помощью профессиональных услуг по кузовному ремонту',
    urlAbout: '/service-about/' + 1,
  },
  {
    id: 2,
    image: '/cards/engine.jpg',
    label: 'РЕМОНТ ДВИГАТЕЛЯ',
    description:
      'Доверьте нам ремонт вашего двигателя и верните своему автомобилю его максимальную производительность',
    urlAbout: '/service-about/' + 2,
  },
  {
    id: 3,
    image: '/cards/grm.jpg',
    label: 'ЗАМЕНА РЕМНЕЙ И ГРМ',
    description:
      'Восстановите первоначальное состояние вашего автомобиля с помощью профессиональных услуг по кузовному ремонту.',
    urlAbout: '/service-about/' + 3,
  },
];

export default function () {
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
