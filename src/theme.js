import { blue, blueGrey } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const defaultTheme = createMuiTheme({
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
      marginBottom: 30,
      display: 'flex',
      alignItems: 'center'
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
  section: {
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
});

const darkTheme = createMuiTheme({
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
      marginBottom: 30,
      display: 'flex',
      alignItems: 'center'
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
    },
  },
  section: {
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
});

export { defaultTheme, darkTheme };