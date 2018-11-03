import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book.js'

class CurrReading extends Component{
static propTypes = {
    books: PropTypes.array.isRequired
  }
	render(){
		return(
			<div>
        	  	<h2 className="bookshelf-title">Currently Reading</h2>
              	<div className="bookshelf-books">
	                <ol className="books-grid">
	                    <Book  key={this.props.books} books={this.props.books}/>
	                </ol>
              	</div>
            </div>
			)
	}
}
export default CurrReading