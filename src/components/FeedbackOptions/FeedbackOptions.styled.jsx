import styled from 'styled-components';

export const BtnHolder = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Btn = styled.button`
  background-color: lightgreen;
  border: none;
  border-radius: 10px;
  padding: 10px 40px;
  &:first-letter {
    text-transform: capitalize;
  }
`;
