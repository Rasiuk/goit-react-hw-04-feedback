import styled from 'styled-components';
export const ButtonContainer = styled.div`
  display: flex;
  gap: 24px;
`;
export const Button = styled.button`
  border: none;
  outline: none;
  width: 94px;
  height: 24px;
  background-color: #f2f3f4;
  cursor: pointer;
  border-radius: 4px;

  &:active {
    background-color: skyblue;
    color: white;
  }
`;
