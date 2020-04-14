import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { Switch, FormControlLabel } from '@material-ui/core';


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  appbar: {
    marginBottom: 80
  },
  switch: {
    marginRight: 'auto'
  },
  label: {
    textTransform: 'uppercase',
    fontSize: 10,
    letterSpacing: 2
  }
}));

const Nav = ({ onSwitchTheme }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar
        className={classes.appbar}
        elevation={0}
        position="static"
        color="transparent">

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
              Switch theme
            </Typography>} />
          <Button color="primary" href="/cv">CV</Button>
          <Button color="primary" href="/now">Now</Button>
        </Toolbar>
      </AppBar>
      <Typography
        className={classes.logo}
        variant='h1'
        component='h1'>
        <Link href='/'>
          Stefano Caioni
        </Link>
      </Typography>
    </>
  )
}

export default Nav;