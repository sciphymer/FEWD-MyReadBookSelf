import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Read from './Read.js'
import WantToRead from './WantToRead.js'
import CurrRead from './CurrReading.js'

class BookShelf extends Component {
	// static propTypes = {
	// 	books: PropTypes.array.isRequired,
	// 	onUpdateBookShelf: ProTypes.func.isRequired
	// }

	render(){
		let currReadingBooks = this.props.books.filter((book) => (book.shelf)==="currentlyReading");
		let wantToReadBooks = this.props.books.filter((book) => (book.shelf)==="wantToRead");
		let readBooks = this.props.books.filter((book) => (book.shelf)==="read");

		return(
			<div className="list-books">
	            <div className="list-books-title">
	             	<h1>MyReads</h1>
	            </div>
	            <div className="list-books-content">
	              <div>
	                <div className="bookshelf">
		                <CurrRead key={"currReadingBooks"}
		                	books={currReadingBooks}
		                	onUpdateBookShelf={this.props.onUpdateBookShelf}
		                />
		                <WantToRead key={"wantToReadBooks"}
		                	books={wantToReadBooks}
		                	onUpdateBookShelf={this.props.onUpdateBookShelf}
		                />
		                <Read key={"readBooks"}
		                	books={readBooks}
		                	onUpdateBookShelf={this.props.onUpdateBookShelf}
		                />
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