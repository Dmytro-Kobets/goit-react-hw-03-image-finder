import { Component } from 'react';

export class ImageGalleryItem extends Component {
  render() {
    const { id, webformatURL, handleImageClick } = this.props;
    return (
      <li className="gallery-item">
        <img
          id={`${id}`}
          src={webformatURL}
          alt=""
          onClick={handleImageClick}
        />
      </li>
    );
  }
}
