import axios from 'axios';

export const getImages = async searchQuery => {
  const options = {
    baseURL: 'https://pixabay.com/api/',
    params: {
      key: '33954907-db44b670018dee1fd494dbc54',
      q: searchQuery,
    },
  };

  const responce = (await axios.get('', options)).data.hits;

  return responce;
};
