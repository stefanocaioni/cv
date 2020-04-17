import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import { Switch, FormControlLabel } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import useScrollTrigger from '@material-ui/core/useScrollTrigger';

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