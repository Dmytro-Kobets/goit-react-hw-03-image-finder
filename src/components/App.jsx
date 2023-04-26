import { Component } from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import axios from 'axios';
import { getImages } from '../services/API.js';

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.params['key'] = '';

// const getImages = async (searchQuery, page = 1, perPage) => {
//   const options = {
//     q: searchQuery,
//     page: page,
//     key: REACT_APP_API_KEY,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     per_page: 12,
//   };
// };

export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    isLoading: false,
  };
  // async componentDidMount() {
  //   // try {
  //   //   const data = await instance.get('', { params: { q: 'dog' } });
  //   //   console.log(data);
  //   // } catch (error) {}
  // }

  async componentDidMount() {}
  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ isLoading: true });
    this.setState({
      searchQuery: e.target.searchQuery.value,
      images: await getImages(e.target.searchQuery.value),
      isLoading: false,
    });
  };

  handleChange = e => {
    this.setState({ searchQuery: e.target.value });
    console.log(e.target);
  };
  render() {
    return (
      <div>
        <Searchbar handleSubmit={this.handleSubmit}></Searchbar>
        <ImageGallery
          images={this.state.images}
          isLoading={this.state.isLoading}
        ></ImageGallery>
      </div>
    );
  }
}
