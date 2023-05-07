import { Component } from 'react';
import { LoadButton } from './LoadMoreButton.styled';

export class LoadMoreButton extends Component {
  render() {
    const { handleLoadMore } = this.props;
    return <LoadButton onClick={handleLoadMore}>Load More</LoadButton>;
  }
}
