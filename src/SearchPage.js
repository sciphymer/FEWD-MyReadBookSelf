import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book.js'
import PropTypes from 'prop-types'

class SearchPage extends Component{

	constructor(props){
		super(props);
		this.state = {
			query:[]
		}
	}

	// static propTypes = {
	// 	myReadList: PropTypes.array.isRequired,
	// 	onUpdateBookShelf: ProTypes.func.isRequired
	// }

	handleQuery = (input)=>{
		if(input!==""){
			BooksAPI.search(input).then((queryResult)=>{
				if(queryResult!==undefined)
					this.setState({query:queryResult})
				else
					this.setState({query:[]})
			})
		}else
			this.setState({query:[]})
	}


	updateQueryBookStatus = (mainPageBooks,queryBooks)=>{
		let updatedQueryBooks=[];
		queryBooks.forEach(function(queryBook){
			let hasShelfAssigned=false;
			for (let i=0; i<mainPageBooks.length; i++){
				if(queryBook.id === mainPageBooks[i].id){
					queryBook.shelf=mainPageBooks[i].shelf;
					hasShelfAssigned=true;
					break;
				}
			}
			if(!hasShelfAssigned)
				queryBook.shelf="none";
			updatedQueryBooks.push(queryBook);
		})
		return updatedQueryBooks;
	}

	render(){
		let books=[];
		if(this.state.query[0]!==undefined)
			books=this.updateQueryBookStatus(this.props.myReadList,this.state.query);
		console.log("updated query books:");
		console.log(books);
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
		          		<Book books={books}
		          			onUpdateBookShelf={this.props.onUpdateBookShelf}
		          		/>
		        </div>
		     </div>
	     )
	}
}

export default SearchPage