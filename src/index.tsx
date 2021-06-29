import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { apolloClient } from './apollo/client';
import { ApolloProvider } from 'react-apollo';
import { App } from './App';
import { theme } from './theme';

const render = () =>
  ReactDOM.render(
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
      <CssBaseline>
        <App/>
      </CssBaseline>
    </ThemeProvider>
    </ApolloProvider>
  , document.getElementById("root"));

render();

