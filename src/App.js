import React, { Component } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf.js'
import SearchPage from './SearchPage.js'
import './App.css'


class BooksApp extends Component {

  constructor(props){
    super(props);
    this.state = { books: [] }
  }


  componentDidMount() {
     BooksAPI.getAll().then((books) => {
      this.setState({books:books})
     })
  }

  updateBookShelf = (book,shelf)=>{
    BooksAPI.update(book,shelf).then(() => {
      BooksAPI.getAll().then((books) => {
      this.setState({books:books})
     })
    });
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
            <Switch>
                <Route exact path='/' render={() => (
                    <BookShelf
                      books={this.state.books}
                      onUpdateBookShelf={this.updateBookShelf}
                    />
                )}/>
                <Route path='/search' render={() => (
                    <SearchPage
                      myReadList={this.state.books}
                      onUpdateBookShelf={this.updateBookShelf}
                    />
                )}/>
            </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default BooksApp
