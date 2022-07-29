import React, { MouseEventHandler, ReactNode } from 'react';
import styled from 'styled-components';

interface IButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

function Button({ onClick, children }: IButtonProps) {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>;
}

export default Button;

const ButtonContainer = styled.button`
  width: 220px;
  height: 50px;
  color: #fff;
  background: ${({ theme }) => theme.color.blue_01};
  border-radius: 10px;
  font-size: 19px;
  font-weight: 500;
  transition: 0.2s;
  :hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  }
`;
