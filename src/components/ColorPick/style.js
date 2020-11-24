import styled from 'styled-components';

export const ColorPickWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 10px;
  width: 50%;
  `;

export const PickersWrapper = styled.div`
  position: relative;
  display: flex;
  padding: 0 10px;
  flex-direction: column;
  width: 50%;
  color: white;
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
  top: 60px;
  left: 10px;
  z-index: 2;

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