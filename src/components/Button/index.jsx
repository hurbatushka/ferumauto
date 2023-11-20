'use client';
import React, { useState } from 'react';
import Modal from '@/components/Modal';
import styles from './Button.module.scss';

export default function Button({ value, modal }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button className={styles.btn} onClick={openModal}>
       {value}
      </button>
      {modal && isModalOpen && <Modal iscloseModal={closeModal} setIsModalOpen={setIsModalOpen} />}
    </>
  );
}
