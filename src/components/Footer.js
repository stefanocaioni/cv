import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 200
  },
  contactsText: {
    textTransform: 'uppercase',
    fontSize: 14,
    letterSpacing: 2,
    marginRight: 10,
  },
  iconLink: {
    display: 'inline-block',
    marginRight: 10,
  },
}));

const Footer = () => {
  const classes = useStyles();

  const contacts = [
    { icon: <GitHubIcon fontSize='small' />, name: 'GitHub', url: 'https://github.com/stefanocaioni' },
    { icon: <EmailIcon fontSize='small' />, name: 'Email', url: 'mailto:ste.caioni@gmail.com' },
    { icon: <LinkedInIcon fontSize='small' />, name: 'LinkedIn', url: 'https://www.linkedin.com/in/stefanocaioni/' },
  ];

  return (
    <div className={classes.footer}>
      <Typography className={classes.contactsText}>Contacts</Typography>
      {
        contacts.map((contact, name) => {
          return (
            <Link
              key={name}
              className={classes.iconLink}
              href={contact.url}
              target='_blank'>
                {contact.icon}
            </Link>
          )
        })
      }
    </div>
  )
}

export default Footer;