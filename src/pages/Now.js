import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LaptopIcon from '@material-ui/icons/Laptop';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';

const API =
  'https://www.googleapis.com/books/v1/users/108832331148662612349/bookshelves/3/volumes';

const styles = theme => ({
  copyMain: theme.copyMain,
  subHeadingIcon: {
    marginRight: 10
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    height: 120,
    marginBottom: 10
  },
  cardDetails: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flex: '1 0 auto',
  },
  cardCover: {
    width: 80,
    height: '100%',
    flex: '0 0 auto',
    marginRight: 10,
    backgroundSize: 'contain'
  },
});

export default withStyles(styles)(class extends Component {
  state = {
    isLoading: false,
    books: [],
    songs: []
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(API)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ books: data.items, isLoading: false });
        console.log('books: ', data);
      });

      fetch('http://ws.audioscrobbler.com/2.0/?method=user.getlovedtracks&user=stefanocaioni&api_key=bfa199dd17ba3f4adbcde4152357f41e&format=json')
        .then(res => {
          return res.json();
        })
        .then(data => {
          this.setState({ songs: data.lovedtracks.track });
          console.log('data: ', data.lovedtracks.track);
        });
  }
  
  render() {
    const { isLoading, books, songs } = this.state;
    const { classes } = this.props;

    return (
      <>
        <Typography
          variant='h2'
          component='h2'>
          What I'm doing now
          <Typography
            variant='overline'
            color='textSecondary'
            display='block'>
            Updated - 16 April 2020
          </Typography>
        </Typography>

        <Typography
          variant='subtitle1'
          component='h3'>
          <LaptopIcon className={classes.subHeadingIcon} fontSize='default' color='primary' />
          Creating
        </Typography>
        <Typography className={classes.copyMain}>
          As well as improving this website I'm also working on a Wordpress theme to use for my blogs.
          I'm coding it using React + Graphql, using Wordpress as a headless CMS.
          Doing server-side rendering for the theme will greatily improve SEO and accessibilty.
        </Typography>

        <Typography
          variant='subtitle1'
          component='h3'>
          <MenuBookIcon className={classes.subHeadingIcon} fontSize='default' color='primary' />
          Books I'm reading
        </Typography>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          books.map((book, i) => {
            return (
              <div
                className={classes.card}
                key={i}>
                <CardMedia
                  className={classes.cardCover}
                  image={book.volumeInfo.imageLinks.smallThumbnail}
                  title={book.volumeInfo.title}
                />
                <div className={classes.cardDetails}>
                  <CardContent className={classes.cardContent}>
                    <Typography component='p' variant='subtitle2'>
                      {book.volumeInfo.title}
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                      {book.volumeInfo.subtitle}
                    </Typography>
                    <Typography variant='overline' color='textSecondary'>
                      {book.volumeInfo.authors.map((author, i) => {
                        return (
                          <span key={i}>{author}</span>
                        )
                      })}
                    </Typography>
                  </CardContent>
                </div>
              </div>
            );
          })
        )}

        <Typography
          variant='subtitle1'
          component='h3'>
          <MusicNoteIcon className={classes.subHeadingIcon} fontSize='default' color='primary' />
          Music I'm listenting to
        </Typography>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          songs.map((song, i) => {
            return (
              <div
                className={classes.card}
                key={i}>
                <CardMedia
                  className={classes.cardCover}
                  image={song.image[0]['#text']}
                  title={song.name}
                />
                <div className={classes.cardDetails}>
                  <CardContent className={classes.cardContent}>
                    <Typography component='p' variant='subtitle2'>
                      {song.name}
                    </Typography>
                    <Typography variant='overline' color='textSecondary'>
                      {song.artist.name}
                    </Typography>
                  </CardContent>
                </div>
              </div>
            );
          })
        )}

        <Typography
          variant='subtitle1'
          component='h3'>
          <ContactSupportIcon className={classes.subHeadingIcon} fontSize='default' color='primary' />
          Thoughts
        </Typography>
        <Typography className={classes.copyMain}>
          I'm thankful because I can work from home and enjoy a great level of freedom. 
          I work on the stuff I love and I have the time to work on different projects I care about and spend 
          time with my fiancée as well as doing sports and reading books.
        </Typography>

        <Typography variant='overline' color='textSecondary' style={{marginRight: 10}}>
          /now page inspired by
        </Typography>
        <Link
          className={classes.textLink}
          href='https://sivers.org/nowff'
          target='_blank'>
          Derek Sivers
        </Link>
      </>
    );
  }
});
