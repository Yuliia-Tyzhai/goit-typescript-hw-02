import React from 'react';
import styles from './ImageCard.module.css';
import { Image } from '../../types';

interface ImageCardProps {
  image: Image;
  onImageClick: (image: Image) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onImageClick }) => {
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
