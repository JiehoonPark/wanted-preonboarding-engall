import React from 'react';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface IPageBoxProps {
  children: ReactNode;
}

function PageBox({ children, ...rest }: IPageBoxProps) {
  return <PageBoxContainer {...rest}>{children}</PageBoxContainer>;
}

export default PageBox;

const PageBoxContainer = styled.div`
  width: 100%;
  min-height: 340px;
  background: #ffffff;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.25);
  padding: 25px 20px;
  margin-bottom: 30px;
`;
