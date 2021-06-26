import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { theme } from './theme';

const render = () =>
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <App/>
      </CssBaseline>
    </ThemeProvider>
  , document.getElementById("root"));

render();

