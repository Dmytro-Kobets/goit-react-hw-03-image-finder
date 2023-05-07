import { Component } from 'react';
import { Overlay, ModalWrapper, ModalImage } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.props.handleEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.handleEscape);
  }
  render() {
    const { largeImageURL, handleModalClose, handleEscape } = this.props;

    return (
      <Overlay
        className="overlay"
        onClick={handleModalClose}
        onKeyDown={handleEscape}
      >
        <ModalWrapper className="modal">
          <ModalImage src={largeImageURL} alt="" onKeyDown={handleEscape} />
        </ModalWrapper>
      </Overlay>
    );
  }
}
