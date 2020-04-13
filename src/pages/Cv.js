import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
import Link from '@material-ui/core/Link';

import { jobs } from '../jobs';
import { stack } from '../stack';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  subtitle1: {
    marginBottom: 8
  },
  textLink: {
    position: 'relative',
    display: 'inline-block',
    padding: '2px 0',
    '&::before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '2px',
      bottom: '0',
      left: '0',
      backgroundColor: '#3f51b5',
      opacity: '0.2'
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '2px',
      bottom: '0',
      left: '0',
      backgroundColor: '#3f51b5',
      transform: 'scaleX(0)',
      transformOrigin: 'bottom right',
      transition: 'transform 0.3s'
    },
    '&:hover': {
      opacity: 0.8,
      textDecoration: 'none',
      '&::after': {
        transformOrigin: 'bottom left',
        transform: 'scaleX(1)'
      }
    }
  },
  list: {
    marginBottom: 10
  },
  listItem: {
    padding: 0,
    marginBottom: 4
  },
  listItemText: {
    fontSize: 18,
    lineHeight: 1.6,
    opacity: 0.9,
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
        {
          stack.map((s, i) => {
            return (
              <ListItem className={classes.listItem}>
                <ListItemText primary={s} />
              </ListItem>
            )
          })
        }
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
              <Typography
                className={classes.subtitle1}
                variant='subtitle1'
                component='h3'>
                {
                  job.url 
                  ? 
                    <Link href={job.url} target='_blank' className={classes.textLink}>
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
                        <FiberManualRecordOutlinedIcon fontSize='inherit' color='primary' />
                      </ListItemIcon>
                      <ListItemText
                        classes={{primary:classes.listItemText}}
                        primary={a} />
                    </ListItem>
                  )
                }) : ''
              }
              {
                job.links
                  ?
                    <List className={classes.list}>
                      <Typography>Some of the pages I've worked on:</Typography>
                      {
                        job.links.map((link, i) => {
                          return (
                            <ListItem className={classes.listItem} key={i}>
                              <ListItemIcon className={classes.listItemIcon}>
                                <FiberManualRecordOutlinedIcon fontSize='inherit' color='primary' />
                              </ListItemIcon>
                              <Link
                                className={`${classes.listItemText} ${classes.textLink}`}
                                href={link} 
                                target='_blank'>
                                {link}
                              </Link>
                            </ListItem>
                          )
                        })
                      }
                    </List>
                  : ''
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