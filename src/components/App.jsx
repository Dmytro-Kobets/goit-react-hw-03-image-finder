import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery';
import { getImages } from '../services/API.js';
import { LoadMoreButton } from './LoadMoreButton';
import { Modal } from './Modal';
import { Loader } from './Loader';
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
    page: 1,
    selectedImageURL: '',
    isModalOpen: false,
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
  };

  handleLoadMore = async (e, prevState) => {
    const appendImages = await getImages(
      this.state.searchQuery,
      this.state.page + 1
    );
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
        images: [...prevState.images, ...appendImages],
      };
    });
  };

  handleImageClick = largeImageURL => {
    this.setState({ selectedImageURL: largeImageURL, isModalOpen: true });
    console.log(largeImageURL);
  };

  handleModalClose = e => {
    this.setState({ isModalOpen: false });
  };

  handleEscape = e => {
    if (e.key === 'Escape') {
      this.setState({ isModalOpen: false });
      console.log(e.keyCode);
    }
  };
  render() {
    return (
      <div>
        <Searchbar handleSubmit={this.handleSubmit}></Searchbar>
        {this.state.isLoading ? (
          <Loader></Loader>
        ) : (
          <div>
            <ImageGallery
              images={this.state.images}
              handleImageClick={this.handleImageClick}
            ></ImageGallery>
            {this.state.images.length ? (
              <LoadMoreButton
                handleLoadMore={this.handleLoadMore}
              ></LoadMoreButton>
            ) : null}
          </div>
        )}
        {this.state.isModalOpen ? (
          <Modal
            largeImageURL={this.state.selectedImageURL}
            handleModalClose={this.handleModalClose}
            handleEscape={this.handleEscape}
          ></Modal>
        ) : null}
      </div>
    );
  }
}
