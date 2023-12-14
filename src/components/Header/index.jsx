import styles from './Header.module.scss';
import Button from '../Button';
import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link href="/">
          <Image
            className={styles.header__logo_link}
            src="/svg/logo_ferrumauto.svg"
            alt="FerumAuto Logo"
            width={200}
            height={100}
            priority
          />
        </Link>
        <div className={styles.adress}>
          <div className={styles.iconadr}>
            <a
              href="https://yandex.by/maps/-/CDQKqA4h"
              target="_blank"
              className={styles.header_adress_icon}>
              <Image
                className={styles.logo_link}
                src="/svg_red/adress.svg"
                alt="FerumAuto Logo"
                width={180}
                height={37}
                priority
              />
            </a>
          </div>
        </div>
        <a
          href="https://yandex.by/maps/-/CDQKqA4h"
          className={styles.header_adress}
          target="_blank">
          <div className={styles.header_adress_container}>
            <p>ГДЕ МЫ НАХОДИМСЯ ?</p>
            <span>Гомель Достоевского 1B</span>
          </div>
        </a>
        <div>
          <Image
            className={styles.logo_link}
            src="/svg_red/mail.svg"
            alt="FerumAuto Logo"
            width={180}
            height={37}
            priority
          />
        </div>
        <div className={styles.headermailtext}>
          <a href="mailto:auto.ferrum@mail.ru" className={styles.headermailtextcolor}>
            auto.ferrum@mail.ru
          </a>
        </div>
        <div className={styles.hworkertime}>
          График работы 09:00-18:00 <p>Без выходных</p>
        </div>

        <div className={styles.buttonit}>
          <a href="tel:375293636020" className={styles.headermailtextcolor}>
            <Button value="+375 (29) 363-60-20" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
