import { Component } from 'react';

export class LoadMoreButton extends Component {
  render() {
    const { handleLoadMore } = this.props;
    return <button onClick={handleLoadMore}>Load More</button>;
  }
}
