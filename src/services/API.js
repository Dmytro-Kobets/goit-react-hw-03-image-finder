import axios from 'axios';

export const getImages = async (searchQuery, page = 1) => {
  const options = {
    baseURL: 'https://pixabay.com/api/',
    params: {
      key: '33954907-db44b670018dee1fd494dbc54',
      q: searchQuery,
      page: page,
      per_page: 12,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  };

  const responce = (await axios.get('', options)).data.hits;

  return responce;
};
