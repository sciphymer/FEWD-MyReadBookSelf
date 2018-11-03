import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Read from './Read.js'
import WantToRead from './WantToRead.js'
import CurrRead from './CurrReading.js'

class BookShelf extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired
	}

	render(){

		let currReadingBooks = this.props.books.filter((book) => (book.shelf)==="wantToRead");
		let wantToReadBooks = this.props.books.filter((book) => (book.shelf)==="read");
		let readBooks = this.props.books.filter((book) => (book.shelf)==="currentlyReading");

		return(
			<div className="list-books">
	            <div className="list-books-title">
	             	<h1>MyReads</h1>
	            </div>
	            <div className="list-books-content">
	              <div>
	                <div className="bookshelf">
	                <CurrRead books={this.currReadingBooks}/>
	                </div>
	              </div>
	            </div>
	            <div className="open-search">
	              <Link to="/search">Add a book</Link>
	            </div>
	        </div>
		);
	}
}

export default BookShelf