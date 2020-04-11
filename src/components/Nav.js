import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  appbar: {
    marginBottom: 80
  }
}));

const Nav = () => {
  const classes = useStyles();

  return (
    <AppBar
      className={classes.appbar}
      elevation={0}
      position="static"
      color="transparent">
      <Toolbar
        className={classes.toolbar}
        disableGutters={true}>
        <Button color="primary" href="/cv">CV</Button>
        <Button color="primary" href="/now">Now</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Nav;