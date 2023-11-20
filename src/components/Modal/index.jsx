// components/CustomModal.jsx
import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './Modal.module.scss';
import axios from 'axios';

const CustomModal = ({ iscloseModal, setIsModalOpen }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const closeModal = () => {
    setName('');
    setPhone('');
    setError('');
    setIsModalOpen(false);
  };

  const sendInfo = async () => {
    if (!name || !phone) {
      setError('Поля "Имя" и "Телефон" обязательны.');
      return;
    }

    const response = await axios.post('/api/sendmail', { name, phone });
    console.log(response);
    // const data = await response.json();

    // if (response.ok) {
    //   console.log('Письмо успешно отправлено:', data.message);
    //   closeModal();
    // } else {
    //   setError(data.error);
    // }
  };

  return (
    <Modal
      isOpen={iscloseModal}
      onRequestClose={closeModal}
      overlayClassName={styles['modal-overlay']}
      className={styles['modal-container']}>
      <div className={styles['modal-header']}>
        <h2>Получить консультацию</h2>
        <button onClick={closeModal}>&times;</button>
      </div>

      <div className={styles['modal-body']}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <label htmlFor="name">Ваше Имя:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="phone">Телефон для связи:</label>
        <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>

      <div className={styles['modal-footer']}>
        <button onClick={sendInfo}>Отправить</button>
      </div>
    </Modal>
  );
};

export default CustomModal;
