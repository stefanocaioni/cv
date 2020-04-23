import React from 'react';
import Link from '@material-ui/core/Link';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  listMenu: {
    display: 'none',
    position: 'fixed',
    top: 120,
    right: 20,
    listStyle: 'none',
    paddingLeft: 0,
    textAlign: 'right',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    },
  },
  listMenuItem: {
    marginBottom: 10
  }
}));

const scrollToElement = (e, id) => {
  e.preventDefault();
  console.log(id);
  
  document.querySelector(id).scrollIntoView({behavior: "smooth"});
}

const Sidebar = ({ links }) => {
  const classes = useStyles();

  return (
    <ul className={classes.listMenu}>
      {
        links.map((link, id) => {
          return (
            <li className={classes.listMenuItem} key={id}>
              <Link href={link.id} onClick={(e) => scrollToElement(e, link.id)}>{link.text}</Link>
            </li>
          )
        })
      }
    </ul>
  )
}

export default Sidebar;