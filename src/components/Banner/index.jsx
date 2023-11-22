import React from 'react';
import styles from './Banner.module.scss';
import ButtonDouble from '../ButtonDouble';

export default function () {
  return (
    <div className={styles.banner_container}>
      <h1>ВАШ АВТОМОБИЛЬ В НАДЁЖНЫХ РУКАХ</h1>
      <a href="tel:375293636020" className={styles.headermailtextcolor}>
      <ButtonDouble value={`Связаться с нами: `} phone={'+375 (29) 363-60-20'} />
      </a>
      
      {/* <Button className={styles.btn} value={'ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ'} modal={true} /> */}
    </div>
  );
}
