import styled from 'styled-components';

export const SearchHeader = styled.header`
  position: fixed;
  background-color: blue;
  height: 50px;
  width: 100%;
`;

export const SearchForm = styled.form`
  height: 40px;
  text-align: center;
  margin-top: 5px;
  background-color: white;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  display: flex;
`;

export const SearchButton = styled.button`
  background: transparent;
  border: none;
  width: 40px;
  height: 40px;
  &:hover {
    cursor: pointer;
  }
`;

export const SearchInput = styled.input`
  width: 400px;
  border: none;
  margin-top: 0;
  padding-bottom: 2px;
  padding-top: 2px;
  &:focus {
    outline: none;
  }
`;
