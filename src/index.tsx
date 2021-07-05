import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { apolloClient } from './apollo/client';
import { ApolloProvider } from 'react-apollo';
import { App } from './App';
import { theme } from './theme';
import { Auth0Provider } from '@auth0/auth0-react';

const render = () => {

  return ReactDOM.render(
    <Auth0Provider
    domain={"dev-fptcog10.us.auth0.com"}
    clientId={"ndHlCoezXNUTMMfTzluH5RykPFCFAdeU"}
    redirectUri={window.location.origin}
    audience={"https://grocery-app.com"}
    >
      <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
      <CssBaseline>
        <App/>
      </CssBaseline>
    </ThemeProvider>
      </ApolloProvider>
    </Auth0Provider>
    
  , document.getElementById("root"));
}

render();

