import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Markdown from 'markdown-to-jsx';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
import CodeIcon from '@material-ui/icons/Code';

import { jobs } from '../jobs';
import { stack } from '../stack';

import { withStyles } from '@material-ui/core/styles';
import Sidebar from '../components/Sidebar';

const styles = theme => ({
  subtitle1: {
    ...theme.subtitle1,
    marginBottom: 8
  },
  body1: theme.typography.body1,
  textLink: theme.textLink,
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
});

const links = [
  {
    id: '#tech',
    text: 'Technologies'
  },
  {
    id: '#history',
    text: 'Work history'
  },
  {
    id: '#cnd',
    text: 'Car Next Door'
  },
  {
    id: '#fln',
    text: 'Freelancer.com'
  },
  {
    id: '#paesanella',
    text: 'Paesanella'
  },
  {
    id: '#contract',
    text: 'Contractor'
  },
]

export default withStyles(styles)(({classes}) => {
  return (
    <>
      <Sidebar links={links} />

      <Typography
        className={classes.subHeading}
        id='tech'
        variant='h2'
        component='h2'>
        Technologies
      </Typography>
      <List className={classes.list}>
        {
          stack.map((s, i) => {
            return (
              <ListItem
                className={classes.listItem}
                key={i}>
                <ListItemIcon className={classes.listItemIcon}>
                  <CodeIcon fontSize='small' color='primary' />
                </ListItemIcon>
                <ListItemText primary={s} />
              </ListItem>
            )
          })
        }
      </List>
 
      <Typography
        className={classes.subHeading}
        id='history'
        variant='h2'
        component='h2'>
        Work History
      </Typography>
      {
        jobs.map((job, id) => {
          return (
            <Fragment key={id}>
              <Typography
                className={classes.subtitle1}
                id={job.id}
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
              <Markdown
                options={{
                  forceBlock: true,
                  overrides: {
                    p: {
                      props: {
                        className: classes.body1
                      }
                    }
                  }
                }}>
                  {job.descriptionMain ? job.descriptionMain : ''}
              </Markdown>
              <Markdown
                options={{
                  forceBlock: true,
                  overrides: {
                    p: {
                      props: {
                        className: classes.body1
                      }
                    }
                  }
                }}>
                {job.descriptionTwo ? job.descriptionTwo : ''}
              </Markdown>
              <Markdown
                options={{
                  forceBlock: true,
                  overrides: {
                    p: {
                      props: {
                        className: classes.body1
                      }
                    }
                  }
                }}>
                {job.descriptionThree ? job.descriptionThree : ''}
              </Markdown>
              <List className={classes.list}>
              {
                job.achievements ? job.achievements.map((a, i) => {
                  return (
                    <ListItem
                      className={classes.listItem}
                      key={i}>
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
                      <Typography>Some of the pages I worked on:</Typography>
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
  )}
)