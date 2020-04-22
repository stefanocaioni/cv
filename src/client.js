import React, { useState, useEffect } from 'react';
import App from './App';
import { hydrate } from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { defaultTheme, darkTheme } from './theme';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';

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

const Main = () => {
  const [theme, handleSwitchTheme] = useDarkMode();
  const themeConfig = theme;

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={themeConfig}>
      <BrowserRouter>
      <CssBaseline />
        <Nav onSwitchTheme={handleSwitchTheme} />
        <Container maxWidth='sm'>
          <App />
          <Footer />
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  )
}

hydrate(<Main />, document.getElementById('root'));

