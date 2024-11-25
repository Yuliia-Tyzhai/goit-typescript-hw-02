import React from 'react';
import Modal from 'react-modal';
import styles from './ImageModal.module.css';
import { ImageModalProps } from '../../types';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
};

Modal.setAppElement('#root');

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onRequestClose,
  image,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Image Modal"
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <div className={styles.modalContent}>
        <button onClick={onRequestClose} className={styles.closeButton}>
          Close
        </button>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={styles.image}
        />
        <p>{image.description || image.alt_description}</p>
      </div>
    </Modal>
  );
};

export default ImageModal;
