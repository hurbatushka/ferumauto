import React from 'react';
import styles from './Banner.module.scss';

import Button from '../Button';

export default function () {
  return (
    <div className={styles.banner_container}>
      <h1>ВАШ АВТОМОБИЛЬ В НАДЁЖНЫХ РУКАХ</h1>
      <Button className={styles.btn} value={'ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ'} />
    </div>
  );
}
