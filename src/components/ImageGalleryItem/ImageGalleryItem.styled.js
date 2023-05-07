import styled from 'styled-components';

export const GalleryItem = styled.li`
  width: calc(100% / 4 - 20px);
  height: 267px;
  overflow: hidden;
`;

export const GalleryPicture = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
