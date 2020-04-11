import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Home from './pages/Home';
import Cv from './pages/Cv';
import Now from './pages/Now';

function App() {
  const theme = createMuiTheme({
    body: {
      backgroundColor: 'rgb(248, 249, 252)'
    },
    typography: {
      body1: {
        fontSize: 20,
        lineHeight: 1.8,
        color: 'rgb(5, 17, 46)'
      }
    },
  });

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div className='content'>
            <Route exact path='/' component={Home} />
            <Route path='/cv' component={Cv} />
            <Route path='/now' component={Now} />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
