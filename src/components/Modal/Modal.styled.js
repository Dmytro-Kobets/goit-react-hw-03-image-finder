import styled from 'styled-components';

export const Overlay = styled.div`
  background-color: rgb(0 0 0 / 0.52);
  position: fixed;
  top: 0%;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalImage = styled.img`
  max-height: 80vh;
`;
