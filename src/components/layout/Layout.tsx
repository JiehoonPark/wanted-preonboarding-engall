import React from 'react';
import { Outlet } from 'react-router';
import styled from 'styled-components';

function Layout() {
  return (
    <LayoutContainer>
      <Header>
        <Logo />
      </Header>
      <Main>
        <Outlet />
      </Main>
    </LayoutContainer>
  );
}

export default Layout;

const LayoutContainer = styled.div``;

const Header = styled.div`
  height: 80px;
  background: ${({ theme }) => theme.color.blue_02};
  @media ${({ theme }) => theme.deviceSize.mobile} {
    height: 60px;
  }
`;

const Logo = styled.img.attrs({
  src: './images/logo.png',
})`
  width: 100px;
  height: 55px;
  margin: 20px 0 0 40px;
  @media ${({ theme }) => theme.deviceSize.mobile} {
    width: 75px;
    height: 42px;
    margin: 10px 0 0 20px;
  }
`;

const Main = styled.main`
  padding: 50px 40px;
  @media ${({ theme }) => theme.deviceSize.mobile} {
    padding: 50px 20px;
  }
`;
