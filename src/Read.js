import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book.js'

class Read extends Component{
static propTypes = {
    books: PropTypes.array.isRequired
  }

	render(){
		let books=this.props.books;
		console.log(this.props.books);
		return(
			<div>
        	  	<h2 className="bookshelf-title">Read</h2>
              	<div className="bookshelf-books">
                <ol className="books-grid">
                	<Book books={this.books}/>
                </ol>
              </div>
            </div>
		)
	}
}
export default Read