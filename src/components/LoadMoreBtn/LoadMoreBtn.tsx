import React from 'react';
import styles from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button className={styles.loadMoreBtn} onClick={onClick} type="button">
      Load more
    </button>
  );
};

export default LoadMoreBtn;
