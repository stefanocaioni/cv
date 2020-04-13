import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
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
    <>
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