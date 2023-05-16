import { Component } from 'react';
import {
  SearchHeader,
  SearchForm,
  SearchButton,
  SearchInput,
} from './Searchbar.styled.js';
import { AiOutlineSearch } from 'react-icons/ai';
import PropTypes from 'prop-types';
export class Searchbar extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <SearchHeader className="searchbar">
        <SearchForm className="form" onSubmit={handleSubmit}>
          <SearchButton type="submit" className="button">
            <AiOutlineSearch size={20}></AiOutlineSearch>
          </SearchButton>

          <SearchInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="searchQuery"
          />
        </SearchForm>
      </SearchHeader>
    );
  }
}

Searchbar.propTypes = { handleSubmit: PropTypes.func.isRequired };
