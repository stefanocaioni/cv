import React from 'react';
import Link from '@material-ui/core/Link';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  listMenu: {
    position: 'fixed',
    top: 120,
    right: 20,
    listStyle: 'none',
    paddingLeft: 0,
    textAlign: 'right',
  },
  listMenuItem: {
    marginBottom: 10
  }
}));

const Sidebar = ({ links }) => {
  const classes = useStyles();

  return (
    <ul className={classes.listMenu}>
      {
        links.map((link, id) => {
          return (
            <li className={classes.listMenuItem} key={id}>
              <Link href={link.id}>{link.text}</Link>
            </li>
          )
        })
      }
    </ul>
  )
}

export default Sidebar;