import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 75px;
  max-height: 75px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #282c33;
  filter: drop-shadow(22px 0px 16px #222);

  .logo-wrapper {
    width: 70px;
    pointer-events: none;
  }
`;

export const TextContainer = styled.div`
  margin: 0 20px;
`;