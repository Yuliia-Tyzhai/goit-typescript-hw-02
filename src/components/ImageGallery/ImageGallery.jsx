import React from 'react';
import styles from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div className={styles.photoPage}>
      <ul className={styles.list}>
        {images !== null &&
          images.map(item => {
            return (
              <li className={styles.listItem} key={item.id}>
                <ImageCard image={item} onImageClick={onImageClick} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ImageGallery;
