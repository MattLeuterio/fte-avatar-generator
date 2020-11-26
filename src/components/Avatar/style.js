import styled from 'styled-components';

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding: 0px 10px;
  width: 50%;

  @media (max-width: 500px) {
    width: 100%;
    justify-content: center;
    padding: 0;
  }
  `;

  export const LogoWrapper = styled.div`
    width: 450px;
    position: absolute;
    top: 50px;

    @media (max-width: 500px) {
      width: 270px;
      top: 40px;
    }
  `;

  export const TextWrapper = styled.div`
    position: absolute;
    top: 55px;
    max-width: 500px;
    overflow: hidden;

    @media (max-width: 500px) {
      max-width: 270px;
      top: 35px;
    }
  `;

  export const NamePlayer = styled.div`
    font-size: 20px;
    font-family: "Montserrat", sans-serif;
    font-weight: 900;
    color: white;
  `;