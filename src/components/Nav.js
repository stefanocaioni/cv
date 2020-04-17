import React from 'react';
import {
  Toolbar,
  Button,
  AppBar,
  Link,
  Typography,
  Slide,
  Switch,
  FormControlLabel,
  Container,
  useScrollTrigger
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  appbar: {
    background: theme.palette.background.default,
  },
  toolar: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  switch: {
    marginRight: 'auto'
  },
  label: {
    textTransform: 'uppercase',
    fontSize: 10,
    letterSpacing: 2
  },
  textLink: theme.textLink,
  logo: {
    marginTop: 180
  }
}));

const HideOnScroll = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Nav = ({ onSwitchTheme }, props) => {
  const classes = useStyles();

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar
          className={classes.appbar}
          elevation={0}
          position='fixed'>
          <Container maxWidth='sm'>
            <Toolbar
              className={classes.toolbar}
              disableGutters={true}>
              <FormControlLabel
                className={classes.switch}
                control={<Switch
                  color='primary'
                  size='small'
                  onClick={() => onSwitchTheme()} />}
                label={<Typography className={classes.label}>
                  toggle dark mode
                </Typography>} />
              <Button color='primary' href='/cv'>CV</Button>
              <Button color='primary' href='/now'>Now</Button>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Container maxWidth='sm'>
        <Typography
          className={classes.logo}
          variant='h1'
          component='h1'>
          <Link href='/'
            underline='none'>
            <strong>Stefano</strong> Caioni
          </Link>
        </Typography>
      </Container>
    </>
  )
}

export default Nav;