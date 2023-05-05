import { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';

export class ImageGallery extends Component {
  render() {
    const { images, handleImageClick } = this.props;
    return (
      <ul className="gallery">
        {images.map(image => {
          const { id, webformatURL, largeImageURL } = image;

          return (
            <ImageGalleryItem
              key={id}
              id={id}
              webformatURL={webformatURL}
              handleImageClick={() => {
                handleImageClick(largeImageURL);
                console.log(largeImageURL);
              }}
            ></ImageGalleryItem>
          );
        })}
      </ul>
    );
  }
}
