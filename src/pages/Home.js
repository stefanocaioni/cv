import React from 'react';
import {
  Link,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  section: theme.section,
  textLink: theme.textLink,
  helloContainer: {
    position: 'relative',
    overflow: 'hidden',
    height: '40px',
    width: '120px',
    padding: '0 25px',
    marginBottom: 40,
    marginLeft: -28,
    '&::before': {
      content: '"["',
      left: 0,
      position: 'absolute',
      top: 0,
      color: theme.palette.primary.main,
      fontSize: '38px',
      lineHeight: '32px',
      animationName: '$opacity',
      animationDuration: '3s',
      animationIterationCount: 'infinite',
    },
    '&::after': {
      content: '"]"',
      right: 0,
      position: 'absolute',
      top: 0,
      color: theme.palette.primary.main,
      fontSize: '38px',
      lineHeight: '32px',
      animationName: '$opacity',
      animationDuration: '3s',
      animationIterationCount: 'infinite',
    },
  },
  '@keyframes opacity': {
    '0%': {opacity:0},
    '100%': {opacity:0},
    '50%': {opacity:1}
  },
});

export default withStyles(styles)(({classes}) => {
  return (
    <>
      <div className={classes.helloContainer}>
        <Typography className={classes.section}>Hello,</Typography>
      </div>
      
      <Typography className={classes.section}>

        I am an experienced and creative Frontend Developer.
        During my years of experience, I sharpened my <strong>HTML5/CSS3/SCSS/Sass</strong> skills and gained deep knowledge of 
        <strong>JavaScript</strong> as well as the most popular <strong>modern Frontend frameworks</strong>.
        <br /><br />
        I have great passion for <strong>UX</strong> and I am convinced that user experience combined with data-driven decisions and a great <strong>UI</strong> are key 
        ingredients for a successful product.
      </Typography>

      <Typography className={classes.section}>
        Check my <Link className={classes.textLink} color='primary' href='/cv'>CV here</Link>
        <br />
        You can find the code for this website <Link className={classes.textLink} target='_blank' href='https://github.com/stefanocaioni/cv'>here</Link>.
        <br />
        Or you can take a look at what I'm doing right <Link className={classes.textLink} color='primary' href='/now'>NOW</Link>
      </Typography>
    </>
  )
})
