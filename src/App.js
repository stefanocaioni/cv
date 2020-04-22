import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
// import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// import { CssBaseline, Container } from '@material-ui/core';
// import { blue, blueGrey } from '@material-ui/core/colors';
// import Nav from './components/Nav';
// import Footer from './components/Footer';
import Home from './pages/Home';
import Cv from './pages/Cv';
import Now from './pages/Now';
// import { defaultTheme, darkTheme } from './theme';

// const useDarkMode = () => {
//   const [theme, setTheme] = useState(defaultTheme);
//   const { palette: { type } } = theme;
  
//   const handleSwitchTheme = () => {
//     if (type === 'light') {
//       window.localStorage.setItem('theme', 'dark');
//       setTheme(darkTheme);
//     } else {
//       window.localStorage.setItem('theme', 'light');
//       setTheme(defaultTheme)
//     }
//   }

//   useEffect(() => {
//     const localTheme = window.localStorage.getItem('theme');
//     const renderedTheme = localTheme === 'light' ? defaultTheme : darkTheme;
//     renderedTheme && setTheme(renderedTheme);
//   }, []);

//   return [theme, handleSwitchTheme];
// }

const App = () => {
  // const [theme, handleSwitchTheme] = useDarkMode();
  // const themeConfig = createMuiTheme(theme);
  
  return (
            <>
              <Route exact path='/' component={Home} />
              <Route path='/cv' component={Cv} />
              <Route path='/now' component={Now} />
            </>
  );
}

export default App;
