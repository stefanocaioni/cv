import React from 'react';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  copyMain: {
    marginBottom: 60
  },
  divider: {
    marginBottom: 60
  },
  speedDial: {
    marginLeft: 'auto',
    marginTop: 60,
    marginBottom: 60
  }
}));

const Footer = () => {
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
    action.name === 'Email'
      ? window.location.href = `mailto:${action.url}`
      : window.location.href = action.url;

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

  return (
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
  )
}

export default Footer;