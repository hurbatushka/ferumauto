'use client';
import React, { useState } from 'react';
import Modal from '@/components/Modal'; // Подставьте правильный путь к вашему компоненту Modal
import styles from './Button.module.scss';
import { Phone } from 'lucide-react';

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
        {phone && <Phone style={{ width: '50px', paddingTop: '5px', paddingRight: '15px' }} />}
        <span>{value}</span>
      </button>
      {modal && isModalOpen && <Modal iscloseModal={closeModal} setIsModalOpen={setIsModalOpen} />}
    </>
  );
}
