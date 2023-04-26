import { Component } from 'react';

export class ImageGalleryItem extends Component {
  render() {
    const { id, webformatURL } = this.props;
    return (
      <li className="gallery-item">
        <img id={`${id}`} src={webformatURL} alt="" />
      </li>
    );
  }
}
