import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cv from './pages/Cv';
import Now from './pages/Now';

import 'typeface-exo-2';

function App() {
  const theme = createMuiTheme({
    body: {
      backgroundColor: 'rgb(248, 249, 252)'
    },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      body1: {
        fontSize: 20,
        lineHeight: 1.8,
        color: 'rgb(5, 17, 46)'
      },
      h1: {
        marginBottom: 40,
        textTransform: 'uppercase',
        fontSize: 14,
        letterSpacing: 2
      },
      h2: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 40
      },
      subtitle1: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 30
      },
      subtitle2: {
        fontSize: 20,
      }
    },
    textLink: {
      position: 'relative',
      display: 'inline-block',
      padding: '3px 0',
      '&::before': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '2px',
        bottom: '0',
        left: '0',
        backgroundColor: '#3f51b5',
        opacity: '0.2'
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '2px',
        bottom: '0',
        left: '0',
        backgroundColor: '#3f51b5',
        transform: 'scaleX(0)',
        transformOrigin: 'bottom right',
        transition: 'transform 0.3s'
      },
      '&:hover': {
        opacity: 0.8,
        textDecoration: 'none',
        '&::after': {
          transformOrigin: 'bottom left',
          transform: 'scaleX(1)'
        }
      }
    },
  });

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Container maxWidth='sm'>
            <Nav />
            <div className='content'>
              <Route exact path='/' component={Home} />
              <Route path='/cv' component={Cv} />
              <Route path='/now' component={Now} />
            </div>
            <Footer />
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
