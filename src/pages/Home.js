import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  copyMain: theme.copyMain,
  textLink: theme.textLink,
});

export default withStyles(styles, { withTheme: true })(class extends Component {
  render() {
   const { classes } = this.props;
  
    return (
      <>
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
          You can check my <Link className={classes.textLink} color='primary' href='/cv'>CV here</Link>
          <br />
          Find the code for this website at <Link className={classes.textLink} target='_blank' href='https://github.com/stefanocaioni/cv'>this repo</Link>.
          <br />
          Or you can take a look at what I'm doing right <Link className={classes.textLink} color='primary' href='/now'>NOW</Link>
        </Typography>
      </>
    )
  }
})
