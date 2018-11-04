import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component{

static propTypes = {
    books: PropTypes.array.isRequired,
    // onUpdateBookShelf: ProTypes.func.isRequired
  }

	render(){
		let books = this.props.books;
		let state = "currentlyReading";
		return(
			<div>
			{
				 books.map(book=>{
					return(
						<li>
	                        <div className="book">
	                          <div className="book-top">
	                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
		                            <div className="book-shelf-changer">
		                              <select value={book.shelf} onChange={(e)=>this.props.onUpdateBookShelf(book,e.target.value)}>
		                                <option value="move" disabled>Move to...</option>
		                                <option value="currentlyReading">Currently Reading</option>
		                                <option value="wantToRead">Want to Read</option>
		                                <option value="read">Read</option>
		                                <option value="none">None</option>
		                              </select>
		                            </div>
		                        </div>
	                            </div>
	                          <div className="book-title">{book.title}</div>
	                        <div className="book-authors">{(book.authors).join(" ")}</div>
	                    </li>
	                )
		        })
	        }
			</div>
	)}}
export default Book