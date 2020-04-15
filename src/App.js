import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cv from './pages/Cv';
import Now from './pages/Now';

// import blue from '@material-ui/core/colors/blue';
import blueGrey from '@material-ui/core/colors/blueGrey';

import blue from '@material-ui/core/colors/blue';

const defaultTheme = {
  palette: {
    background: {
      default: 'rgb(248, 249, 252)'
    },
    primary: {
      light: blue.A200,
      main: blue.A400,
      dark: blue.A700
    },
    type: 'light'
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    body1: {
      fontSize: 22,
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
      marginBottom: 30
    },
    subtitle1: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 30
    },
    subtitle2: {
      fontSize: 20,
    },
    a: {
      position: 'relative',
      display: 'inline-block',
      padding: '2px 0',
      '&::before': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '2px',
        bottom: '0',
        left: '0',
        backgroundColor: blue[700],
        opacity: '0.2'
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '2px',
        bottom: '0',
        left: '0',
        backgroundColor: blue[700],
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
    }
  },
  copyMain: {
    marginBottom: 60
  },
  textLink: {
    position: 'relative',
    display: 'inline-block',
    '&::before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '2px',
      bottom: '0',
      left: '0',
      backgroundColor: blue[700],
      opacity: '0.2'
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '2px',
      bottom: '0',
      left: '0',
      backgroundColor: blue[700],
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
};

const darkTheme = {
  palette: {
    background: {
      default: blueGrey[900]
    },
    primary: {
      light: blue[50],
      main: blue[200],
      dark: blue[900]
    },
    type: 'dark'
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    body1: {
      fontSize: 22,
      lineHeight: 1.8,
      color: blueGrey[50]
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
      marginBottom: 30
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
  copyMain: {
    marginBottom: 60
  },
  textLink: {
    position: 'relative',
    display: 'inline-block',
    padding: '2px 0',
    '&::before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '2px',
      bottom: '0',
      left: '0',
      backgroundColor: blue[200],
      opacity: '0.2'
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '2px',
      bottom: '0',
      left: '0',
      backgroundColor: blue[200],
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
};

const useDarkMode = () => {
  const [theme, setTheme] = useState(defaultTheme);
  const { palette: { type } } = theme;
  
  const handleSwitchTheme = () => {
    if (type === 'light') {
      window.localStorage.setItem('theme', 'dark');
      setTheme(darkTheme);
    } else {
      window.localStorage.setItem('theme', 'light');
      setTheme(defaultTheme)
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    const renderedTheme = localTheme === 'light' ? defaultTheme : darkTheme;
    renderedTheme && setTheme(renderedTheme);
  }, []);

  return [theme, handleSwitchTheme];
}

const App = () => {
  const [theme, handleSwitchTheme] = useDarkMode();
  const themeConfig = createMuiTheme(theme);
  
  return (
    <>
      <ThemeProvider theme={themeConfig}>
        <CssBaseline />
        <BrowserRouter>
          <Container maxWidth='sm'>
            <Nav onSwitchTheme={handleSwitchTheme} />
            <>
              <Route exact path='/' component={Home} />
              <Route path='/cv' component={Cv} />
              <Route path='/now' component={Now} />
            </>
            <Footer />
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
