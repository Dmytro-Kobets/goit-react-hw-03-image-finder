import { Component } from 'react';

export class Searchbar extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <header className="searchbar">
        <form className="form" onSubmit={handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="searchQuery"
          />
        </form>
      </header>
    );
  }
}
