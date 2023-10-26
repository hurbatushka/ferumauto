import styles from './page.module.css';
import Banner from '../components/Banner';
import ServiceWrapper from '../components/ServiceWrapper';
import Advantages from '../components/Advantages';
import Contacts from '../components/Contacts';

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <ServiceWrapper />
      <Advantages />
      <Contacts />
    </main>
  );
}
