'use client';
import React, { useState } from 'react';
import Modal from '@/components/Modal';
import styles from './Button.module.scss';

export default function Button({ value, modal, phone }) {
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
        <br/>
        {phone}        
      </button>
      {modal && isModalOpen && <Modal iscloseModal={closeModal} setIsModalOpen={setIsModalOpen} />}
    </>
  );
}
