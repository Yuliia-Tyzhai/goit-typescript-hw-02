import React from 'react';
import styles from './ImageCard.module.css';

const ImageCard = ({ image, onImageClick }) => {
  return (
    <div className={styles.card} onClick={() => onImageClick(image)}>
      <img
        className={styles.image}
        src={image.urls.small}
        alt={image.alt_description}
      />
      <p>{image.description || image.alt_description}</p>
    </div>
  );
};

export default ImageCard;
