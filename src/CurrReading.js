import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book.js'

class CurrReading extends Component{
// static propTypes = {
//     books: PropTypes.array.isRequired,
	   // onUpdateBookShelf: ProTypes.func.isRequired
//   }
	render(){
		return(
			<div>
        	  	<h2 className="bookshelf-title">Currently Reading</h2>
              	<div className="bookshelf-books">
	                    <Book books={this.props.books}
	                    	onUpdateBookShelf={this.props.onUpdateBookShelf}
	                    />
              	</div>
            </div>
			)
	}
}
export default CurrReading