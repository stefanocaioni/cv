import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

import Nav from '../components/Nav';

import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    marginBottom: 40,
    textTransform: 'uppercase',
    fontSize: 14,
    letterSpacing: 2
  },
  copyMain: {
    marginBottom: 60
  },
  divider: {
    marginBottom: 60
  },
  speedDial: {
    marginLeft: 'auto'
  }
}));

const Home = () => {
  const preventDefault = (e) => e.preventDefault();
  const classes = useStyles();
  const [direction] = React.useState('right');
  const [open, setOpen] = React.useState(false);
  const [hidden] = React.useState(false);

  const handleClose = (url) => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleRedirect = (action) => {


      window.open(
        action.url,
        '_blank'
      )
  }

  const actions = [
    { icon: <GitHubIcon />, name: 'GitHub', url: 'https://github.com/stefanocaioni' },
    { icon: <EmailIcon />, name: 'Email', url: 'ste.caioni@gmail.com' },
    { icon: <LinkedInIcon />, name: 'LinkedIn', url: 'https://www.linkedin.com/in/stefanocaioni/' },
  ];

  return(
    <Container maxWidth='sm'>
      <Nav />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography
            className={classes.logo}
            variant='h1'>
            Stefano Caioni
          </Typography>

          <Typography className={classes.copyMain}>
              Ciao,
              <br /><br />
              I am an experienced and creative Frontend Developer.
              During my years of experience, I sharpened my HTML5/CSS3/SCSS/Sass skills and gained deep knowledge of 
              vanilla JavaScript as well as the most popular modern Frontend frameworks.
              <br /><br />
              I have great passion for UX and I am convinced that user experience combined with data-driven decisions and a great UI are key 
              ingredients for a successful product.
          </Typography>

          <Typography className={classes.copyMain}>
            You can check my <Link color='primary' href='#' onClick={preventDefault}>CV here</Link>
            <br />
            Or you can take a look at what I'm doing right <Link color='primary' href='#' onClick={preventDefault}>NOW</Link>
          </Typography>

          <SpeedDial
            ariaLabel='SpeedDial example'
            className={classes.speedDial}
            hidden={hidden}
            icon={<SpeedDialIcon />}
            onClose={handleClose}
            onOpen={handleOpen}
            open={open}
            direction={direction}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={(e) => handleRedirect(action, e)}
              />
            ))}
          </SpeedDial>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home;