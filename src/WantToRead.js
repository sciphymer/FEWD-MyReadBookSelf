import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book.js'

class WantToRead extends Component{
static propTypes = {
    books: PropTypes.array.isRequired,
    // onUpdateBookShelf: ProTypes.func.isRequired
  }
	render(){
		return(
			<div>
        	  	<h2 className="bookshelf-title">Want to Read</h2>
              	<div className="bookshelf-books">
	                <ol className="books-grid">
	                    <Book books={this.props.books}
	                    	onUpdateBookShelf={this.props.onUpdateBookShelf}
	                    />
	                </ol>
              	</div>
            </div>
			)
	}
}
export default WantToRead