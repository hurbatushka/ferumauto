import styles from './Button.module.scss';

// eslint-disable-next-line react/prop-types
export default function Button({ value }) {
  return <button className={styles.btn}>{value}</button>;
}
