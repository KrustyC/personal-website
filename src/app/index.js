import React from 'react';
import { hot } from 'react-hot-loader/root';
import styled, { ThemeProvider } from 'styled-components';
import { ApolloProvider } from 'react-apollo';
import media from 'styled-media-query';
import client from './ApolloClient';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import GlobalStyle from './GlobalStyle';
import theme from './theme';

const MainLayout = styled.div`
  display: flex;
  min-height: 100vh;

  ${media.lessThan('large')`
    flex-direction: column;
  `}
`;

const App = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <MainLayout>
          <LeftSide />
          <RightSide />
        </MainLayout>
      </>
    </ThemeProvider>
  </ApolloProvider>
);

export default hot(App);
