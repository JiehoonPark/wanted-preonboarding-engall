import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface ITitleProps {
  children: ReactNode;
}

function Title({ children }: ITitleProps) {
  return <TitleContainer>{children}</TitleContainer>;
}

const TitleContainer = styled.h1`
  font-weight: 700;
  font-size: 29px;
  margin-bottom: 50px;
  @media ${({ theme }) => theme.deviceSize.mobile} {
    font-size: 23px;
    margin-bottom: 30px;
  }
`;

export default Title;
