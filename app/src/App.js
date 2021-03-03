import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import { fetchBooks } from './store/actions'
import SearchForm from './components/SearchForm'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App(props) {
  useEffect(() => {
    // everytime the app refreshes, useEffect will try to call fetchBooks()
    props.fetchBooks();
  }, [])

  return (
    <div className="App">
      <h1>Cat Fax</h1>
      <SearchForm />
      {props.books.map(book => {
        <h1 key={book.id}>{book.text}</h1>
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps, { fetchBooks })(App);
