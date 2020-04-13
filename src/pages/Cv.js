import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';

import { makeStyles } from '@material-ui/core/styles';
import { jobs } from '../jobs';
import { Link } from '@material-ui/core';

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
  },
  list: {
    marginBottom: 60
  },
  listItem: {
    padding: 0,
  },
  listItemIcon: {
    minWidth: 30
  },
  iconStyle: {
    width: 5
  }
}));

const Cv = () => {
  const classes = useStyles();

  return (
    <>
      <Typography
        className={classes.subHeading}
        variant='h2'
        component='h2'>
        Technologies
      </Typography>
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <ListItemText primary='JS, Typescript' />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary='React, Angular, Vue' />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary='HTML, CSS, SASS/SMACSS/BEM/TailwindCSS' />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary='CSS-in-JS' />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary='RESTful API' />
        </ListItem>
      </List>

      <Typography
        className={classes.subHeading}
        variant='h2'
        component='h2'>
        Work History
      </Typography>
      {
        jobs.map((job, i) => {
          return (
            <Fragment key={i}>
              <Typography className={classes.copyMain}>
                {
                  job.url 
                  ? 
                    <Link href={job.url} target='_blank'>
                      <strong>{job.role}</strong>
                    </Link>
                  : <strong>{job.role}</strong>
                }
              </Typography>
              <Typography variant='overline' color='textSecondary'>
                {job.date}
              </Typography>
              <Typography className={classes.copyMain}>
                {job.descriptionMain ? job.descriptionMain : ''}
              </Typography>
              <Typography>
                {job.descriptionTwo ? job.descriptionTwo : ''}
              </Typography>
              <Typography>
                {job.descriptionThree ? job.descriptionThree : ''}
              </Typography>
              <List className={classes.list}>
              {
                job.achievements ? job.achievements.map((a, i) => {
                  return (
                    <ListItem className={classes.listItem}>
                      <ListItemIcon className={classes.listItemIcon}>
                        <FiberManualRecordOutlinedIcon fontSize='inherit' />
                      </ListItemIcon>
                      <ListItemText primary={a} />
                    </ListItem>
                  )
                }) : ''
              }
              </List>
            </Fragment>
          )
        })
      }
    </>
  )
}

export default Cv;