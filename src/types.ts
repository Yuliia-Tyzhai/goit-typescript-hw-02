export interface Image {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
  description: string | null;
}

export interface ApiResponse {
  results: Image[];
  total_pages: number;
}

export interface ModalProps {
  id: string;
  url: string;
  alt: string;
}

export interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

export interface LoadMoreBtnProps {
  onClick: () => void;
}

export interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image: ModalProps;
}
