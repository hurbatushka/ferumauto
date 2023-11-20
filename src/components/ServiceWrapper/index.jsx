import styles from './ServiceWrapper.module.scss';

import Card from '../Card';
import SectionName from '../SectionName';
import { data } from './data';

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
