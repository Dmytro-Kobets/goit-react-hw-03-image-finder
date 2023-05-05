import { Component } from 'react';

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
      <div className="overlay" onKeyDown={handleEscape}>
        <div
          className="modal"
          onClick={handleModalClose}
          onKeyDown={handleEscape}
        >
          <img src={largeImageURL} alt="" onKeyDown={handleEscape} />
        </div>
      </div>
    );
  }
}
