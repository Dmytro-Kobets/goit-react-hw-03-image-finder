import { Component } from 'react';
import { GalleryItem, GalleryPicture } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  render() {
    const { id, webformatURL, handleImageClick } = this.props;
    return (
      <GalleryItem className="gallery-item">
        <GalleryPicture
          id={`${id}`}
          src={webformatURL}
          alt=""
          onClick={handleImageClick}
        />
      </GalleryItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  handleImageClick: PropTypes.func.isRequired,
};
