import React from 'react';
import styles from './SectionName.module.scss';

export default function index({ name, description }) {
  return (
    <div className={styles.container}>
      <h4>{name}</h4>
      <h1>{description}</h1>
    </div>
  );
}
