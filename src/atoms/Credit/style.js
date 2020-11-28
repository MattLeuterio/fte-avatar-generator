import styled from 'styled-components';

export const CreditLink = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 12px;


  @media (max-width: 500px) {
    right: 50%;
    transform: translateX(50%);
  }
  
  a {
    color: white;
    text-decoration: none;

    &:hover {
      color: #29f29c;
    }
    > span {
      font-weight: 700;
    }
  }

`;