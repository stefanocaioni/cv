import React from 'react';
import {
  Link,
  Typography
} from '@material-ui/core';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
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
