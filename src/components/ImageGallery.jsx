import { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';

export class ImageGallery extends Component {
  render() {
    const { images, isLoading } = this.props;
    return (
      <ul className="gallery">
        {images.map(image => {
          const { id, webformatURL } = image;
          return isLoading ? (
            <p>Loading</p>
          ) : (
            <ImageGalleryItem
              key={id}
              id={id}
              webformatURL={webformatURL}
            ></ImageGalleryItem>
          );
        })}
      </ul>
    );
  }
}
