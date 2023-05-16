import { Component } from 'react';
import { LoadButton } from './LoadMoreButton.styled';
import PropTypes from 'prop-types';

export class LoadMoreButton extends Component {
  render() {
    const { handleLoadMore } = this.props;
    return <LoadButton onClick={handleLoadMore}>Load More</LoadButton>;
  }
}

LoadMoreButton.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
};
