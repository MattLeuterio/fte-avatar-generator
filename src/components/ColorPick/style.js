import styled from 'styled-components';

export const ColorPickWrapper = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const SettingsWrapper = styled.div`
  position: relative;
  display: flex;
  padding: 30px 10px;
  flex-direction: column;
  width: 50%;
  color: white;

  @media (max-width: 500px) {
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;


  @media (max-width: 500px) {
    width: fit-content;
  }

  .icon {
    padding: 10px;
    background: #535f6f;
    text-align: center;
    width: 18px;
    height: 18px;
    border-radius: 12px;
    margin-right: 10px;
  }

  .input {
    color: white;
    border: 0;
    padding: 10px;
    background: transparent;
    border-bottom: 2px solid #96A7AF;
    width: 180px;
    outline: none;

    &:focus {
      border-bottom: 2px solid #29F29C;
    }
  }

`;



export const SwatchWrapper = styled.div`
  display: flex;

  > div:first-child {
    margin-right: 10px;
  }
`;

export const Swatch = styled.div`
  width: 30px;
  height: 15px;
  margin-top: 5px;
  border-radius: 5px;
  display: inline-block;
  cursor: pointer;
`;

export const Popover = styled.div`
  position: absolute;
  top: 80px;
  left: 10px;
  z-index: 2;

  @media (max-width: 500px) {
    top: 10px;
    left: auto;
  }

  .chrome-picker {
    background-color: #25262d !important;
  }
`;

export const Cover = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 30px;

  button {
    margin-right: 10px;
  }
`;