import React from 'react';
import { Router } from 'react-static';
import styled, { injectGlobal } from 'styled-components';
import { hot } from 'react-hot-loader';
import Routes from 'react-static-routes';
//
import '~/styles/tailwind.build.css';

injectGlobal`
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-size: 16px;
    margin:0;
    height:100vh;
  }
`;

const AppStyles = styled.div`
  background-color: hsl(220, 50%, 99%);
`;

const App = () => (
  <Router>
    <AppStyles>
      <Routes />
    </AppStyles>
  </Router>
);

export default hot(module)(App);
