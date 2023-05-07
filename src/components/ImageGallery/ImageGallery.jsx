import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

export class ImageGallery extends Component {
  render() {
    const { images, handleImageClick } = this.props;
    return (
      <GalleryList className="gallery">
        {images.map(image => {
          const { id, webformatURL, largeImageURL } = image;

          return (
            <ImageGalleryItem
              key={id}
              id={id}
              webformatURL={webformatURL}
              handleImageClick={() => {
                handleImageClick(largeImageURL);
              }}
            ></ImageGalleryItem>
          );
        })}
      </GalleryList>
    );
  }
}
