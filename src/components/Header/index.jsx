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
            src="/svg/logo.svg"
            alt="FerumAuto Logo"
            width={280}
            height={67}
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
                src="/svg/adress.svg"
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
            src="/svg/mail.svg"
            alt="FerumAuto Logo"
            width={180}
            height={37}
            priority
          />
        </div>
        <div className={styles.headermailtext}>
          <a href="mailto:ferummavto@mail.ru" className={styles.headermailtextcolor}>
            ferummavto@mail.ru
          </a>
        </div>
        <div className={styles.hworkertime}>
          График работы 09:00-18:00 <p>Без выходных</p>
        </div>

        <div className={styles.buttonit}>
          <a href="tel:375293636020" className={styles.headermailtextcolor}>
            <Button value="+375293636020" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
