import Image from 'next/image';
import Link from 'next/link';
import styles from './Card.module.scss';

export default function Card({ item }) {
  return (
    <div className={styles.gridItem}>
      <div className={styles.imageContainer}>
        <Image src={item.image} alt={item.label} width={425} height={275} />
        <div className={styles.overlay}>
          <h2>{item.label}</h2>
          <p>{item.description}</p>
          <Link className={styles.link} href={item.urlAbout}>
            Подробнее
          </Link>
        </div>
      </div>
    </div>
  );
}
