'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styles from './NavBar.module.scss';
import Link from 'next/link';

export default function NavBar() {
  const currentPathname = usePathname();
  const [activeButtonIndex, setActiveButtonIndex] = useState(-1);

  const menuItems = [
    { text: 'Главная', link: '/' },
    { text: 'СТО', link: '/sto' },
    { text: 'Кузовной ремонт', link: '/repair' },
    { text: 'Запчасти', link: '/sales' },
    { text: 'Контакты', link: '/contacts' },
  ];

  useEffect(() => {
    const activeItem = menuItems.findIndex((item) => currentPathname === item.link);
    setActiveButtonIndex(activeItem);
  }, [currentPathname]);

  const handleButtonClick = (index) => {
    setActiveButtonIndex(index);
  };

  return (
    <div className={styles.buttonContainer}>
      {menuItems.map((item, index) => (
        <div className={styles.buttonWrapper} key={index}>
          <Link href={item.link}>
            <span
              className={`${styles.button} ${index === activeButtonIndex ? styles.active : ''}`}
              onClick={() => handleButtonClick(index)}>
              {item.text.toUpperCase()}
            </span>
          </Link>
          {index === activeButtonIndex && <div className={styles.line}></div>}
        </div>
      ))}
    </div>
  );
}
