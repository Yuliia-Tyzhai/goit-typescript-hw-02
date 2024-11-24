import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ImageModal from './ImageModal/ImageModal';
import fetchImages from '../services/api';

// import './App.css'

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [searchValue, setSearchValue] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [totalPages, setTotalPages] = useState(0);

  const onSearch = searchTerm => {
    setSearchValue(searchTerm);
    setImages([]);
    setPage(1);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = image => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  useEffect(() => {
    const fetchImagesBySearchValue = async () => {
      if (!searchValue) return;

      setIsLoading(true);
      try {
        const data = await fetchImages(searchValue, page);
        setImages(prevImages => [...prevImages, ...data.results]);
        setHasMore(data.results.length > 0);
        setTotalPages(data.total_pages);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImagesBySearchValue();
  }, [searchValue, page]);

  return (
    <div>
      <SearchBar onSubmit={onSearch} />
      {isLoading && <Loader />}
      {isError && <p>Error fetching images. Please try again.</p>}
      <ImageGallery images={images} onImageClick={openModal} />
      {images.length > 0 && page < totalPages && (
        <LoadMoreBtn onClick={loadMore} />
      )}
      {selectedImage && (
        <ImageModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          image={selectedImage}
        />
      )}
    </div>
  );
}

export default App;
