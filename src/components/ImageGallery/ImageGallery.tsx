import React from 'react';
import styles from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

interface Image {
  id: string;
  urls: {
    small: string;
  };
  alt_description: string;
  description: string | null;
}

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
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
