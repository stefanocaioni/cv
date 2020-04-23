import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Sidebar from '../components/Sidebar';
import {
  Typography,
  CardContent,
  CardMedia,
  Link,
} from '@material-ui/core';

import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LaptopIcon from '@material-ui/icons/Laptop';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import HeadsetIcon from '@material-ui/icons/Headset';

import { key } from '../secret';

const BOOKS_ENDPOINT =
  `https://www.googleapis.com/books/v1/users/${key.books}/bookshelves/3/volumes`;

const SONGS_ENDPOINT = 
  `https://ws.audioscrobbler.com/2.0/?method=user.getlovedtracks&user=stefanocaioni&api_key=${key.songs}&format=json`;

const styles = theme => ({
  section: theme.section,
  subHeadingIcon: {
    marginRight: 10
  },
  textLink: theme.textLink,
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

const links = [
  {
    id: '#creating',
    text: 'Creating'
  },
  {
    id: '#books',
    text: 'Books'
  },
  {
    id: '#podcasts',
    text: 'Podcasts'
  },
  {
    id: '#music',
    text: 'Music'
  },
  {
    id: '#bodymind',
    text: 'Body & Mind'
  },
  {
    id: '#thoughts',
    text: 'Thoughts'
  },
]

export default withStyles(styles)(({classes}) => {
  const books = useFetch(BOOKS_ENDPOINT);
  const songs = useFetch(SONGS_ENDPOINT);

  return (
    <>
      <Sidebar links={links} />
      <Typography
        variant='h2'
        component='h2'>
        What I'm doing now
        <Typography
          variant='overline'
          color='textSecondary'
          display='block'>
          Last Updated April 2020
        </Typography>
      </Typography>

      <div className={classes.section}>
        <Typography
          id='creating'
          variant='subtitle1'
          component='h3'>
          <LaptopIcon className={classes.subHeadingIcon} fontSize='default' color='primary' />
          Creating
        </Typography>
        <Typography>
          As well as constantly improving this website I'm also working on a React Wordpress theme to use for my blogs.
          I'm coding it using <strong>React + Graphql</strong>, using Wordpress as a headless CMS.
          Implementing server-side rendering will greatily improve UX and SEO.
        </Typography>
      </div>

      <div className={classes.section}>
        <Typography
          id='books'
          variant='subtitle1'
          component='h3'>
          <MenuBookIcon className={classes.subHeadingIcon} fontSize='default' color='primary' />
          Books (reading or listening)
        </Typography>
        {!books || books.isLoading ? (
          <p>Loading...</p>
        ) : (
          books.data.items.map((book, i) => {
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
                      <Link className={classes.textLink} href={book.volumeInfo.infoLink} target='_blank'>{book.volumeInfo.title}</Link>
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                      {book.volumeInfo.subtitle}
                    </Typography>
                    <Typography variant='overline' color='textSecondary'>
                      {book.volumeInfo.authors.map(
                        (author, i) => <span key={i}>{author}</span>
                      )}
                    </Typography>
                  </CardContent>
                </div>
              </div>
            );
          })
        )}
      </div>
      
      <div className={classes.section}>
        <Typography
          id='podcasts'
          variant='subtitle1'
          component='h3'>
          <HeadsetIcon className={classes.subHeadingIcon} fontSize='default' color='primary' />
          Podcasts
        </Typography>
        <Typography component='p' variant='subtitle2'>
          <Link
            className={classes.textLink}
            href='https://www.listennotes.com/podcasts/the-joe-rogan-experience-joe-rogan-s_ML5QqPi0v/' target='_blank'>
              The Joe Rogan Experience
            </Link>
        </Typography>
        <Typography display='block' variant='overline' color='textSecondary'>
          Joe Rogan
        </Typography>
        <Typography component='p' variant='subtitle2'>
          <Link
            className={classes.textLink}
            href='https://www.listennotes.com/podcasts/the-rich-roll-podcast-rich-roll-T1Kd_QXu3Ha/'
            target='_blank'>
              The Rich Roll Podcast
            </Link>
        </Typography>
        <Typography display='block' variant='overline' color='textSecondary'>
          Rich Roll
        </Typography>
      </div>

      <div className={classes.section}>
        <Typography
        id='music'
        variant='subtitle1'
        component='h3'>
        <MusicNoteIcon className={classes.subHeadingIcon} fontSize='default' color='primary' />
        Music I'm liking
      </Typography>
        {!songs || songs.isLoading ? (
          <p>Loading...</p>
        ) : (
          songs.data.lovedtracks.track.map((song, i) => {
            return (
              <div key={i}>
                  <Typography component='p' variant='subtitle2'>
                    <Link className={classes.textLink} href={song.url} target='_blank'>{song.name}</Link>
                  </Typography>
                  <Typography display='block' variant='overline' color='textSecondary'>
                    {song.artist.name}
                  </Typography>
              </div>
            );
          })
        )}
      </div>

      <div className={classes.section}>
        <Typography
          id='bodymind'
          variant='subtitle1'
          component='h3'>
          <DirectionsRunIcon className={classes.subHeadingIcon} fontSize='default' color='primary' />
          Body and Mind
        </Typography>
        <Typography>
          I run 32 km (20 miles) on average per week and meditate for 1 hour every day.
        </Typography>
      </div>

      <div className={classes.section}>
        <Typography
          id='thoughts'
          variant='subtitle1'
          component='h3'>
          <ContactSupportIcon className={classes.subHeadingIcon} fontSize='default' color='primary' />
          Thoughts
        </Typography>
        <Typography>
          I feel lucky since I work on the things I love.
        </Typography>
      </div>

      <div className={classes.section}>
        <Typography variant='overline' color='textSecondary' style={{marginRight: 10}}>
          /now page inspired by
        </Typography>
        <Link
          className={classes.textLink}
          href='https://sivers.org/nowff'
          target='_blank'>
          Derek Sivers
        </Link>
      </div>
    </>
  );
});

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
    
  }, []);
  
  return { data, isLoading, error } ;
}

