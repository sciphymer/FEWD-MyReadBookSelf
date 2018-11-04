import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book.js'

class SearchPage extends Component{
	state = {
		query: []
	}

	handleQuery = (input)=>{
		BooksAPI.search(input).then((queryResult)=>{
			this.setState({query:[queryResult]})
		})
	}

	render(){
		let queryLength = this.state.query.length;
		console.log(this.state.query)
		return(
			<div className="search-books">
		        <div className="search-books-bar">
		          <Link to="/" className="close-search">Close</Link>
		          <div className="search-books-input-wrapper">
		            {/*
		              NOTES: The search from BooksAPI is limited to a particular set of search terms.
		              You can find these search terms here:
		              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

		              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
		              you don't find a specific author or title. Every search is limited by search terms.
		            */

		        	}
		            <input type="text" placeholder="Search by title or author"
		            	onChange={(e)=>this.handleQuery(e.target.value)}
		            />

		          </div>
		        </div>
		        <div className="search-books-results">
		          	{(queryLength>0 && queryLength!==null) &&
		          		<Book books={this.state.query}/>
		          	}
		        </div>
		     </div>
	     )
	}
}

export default SearchPage