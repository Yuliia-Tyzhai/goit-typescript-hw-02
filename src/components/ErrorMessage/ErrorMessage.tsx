import React from 'react';
import styles from './ErrorMessage.module.css';

const ErrorMessage: React.FC = () => {
  return (
    <p className={styles.error}>
      Oops, some error occurred... Please, try again later.
    </p>
  );
};

export default ErrorMessage;
