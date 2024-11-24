import axios from 'axios';

const UNSPLASH_ACCESS_KEY = 'yvyVy1RExVSyAZXEmZk6-bnRZDkXSEhCn4jC6GZqmXM';

const fetchImages = async (query, page = 1) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=${UNSPLASH_ACCESS_KEY}&query=${query}&page=${page}`
  );
  return response.data;
};

export default fetchImages;
