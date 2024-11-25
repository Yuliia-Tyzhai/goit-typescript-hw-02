import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ImageModal from './ImageModal/ImageModal';
import fetchImages from '../services/api';
import { ApiResponse, Image } from '../types';

export interface AppState {
  images: Image[];
  isLoading: boolean;
  isError: boolean;
  searchValue: string | null;
  modalIsOpen: boolean;
  selectedImage: Image | null;
  page: number;
  hasMore: boolean;
  totalPages: number;
}

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [totalPages, setTotalPages] = useState<number>(0);

  const onSearch = (searchTerm: string): void => {
    setSearchValue(searchTerm);
    setImages([]);
  };

  const loadMore = (): void => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = (image: Image): void => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = (): void => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  useEffect(() => {
    const fetchImagesBySearchValue = async (): Promise<void> => {
      if (!searchValue) return;

      setIsLoading(true);
      try {
        const data: ApiResponse = await fetchImages(searchValue, page);
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
