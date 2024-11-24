import React from 'react';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import styles from './SearchBar.module.css';

const notify = () => toast('You should write something!');

const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSubmit = event => {
    event.preventDefault();
    if (!searchTerm.trim()) {
      notify();
      return;
    }
    onSubmit(searchTerm);
    setSearchTerm('');
  };
  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
        <Toaster />
      </form>
    </header>
  );
};

export default SearchBar;
