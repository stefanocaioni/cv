import React, { Component } from 'react';

const API = 'https://www.googleapis.com/books/v1/users/108832331148662612349/bookshelves/3/volumes';

export default class extends Component {
  state ={
    isLoading: false,
    books: []
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(API)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ books: data.items, isLoading: false })
        console.log('books: ', data);
      })
  }
    
  render() {
    const { isLoading, books } = this.state;
    return (
      <>
        {
          isLoading
            ? <p>Loading...</p>
            : books.map((book, i) => {
              return (
                <p key={i}>{book.volumeInfo.title}</p>
              )
            })
        }
      </>
    )
  }

}
