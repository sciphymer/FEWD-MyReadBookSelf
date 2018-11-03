import React, { Component } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf.js'
import SearchPage from './SearchPage.js'
import './App.css'


class BooksApp extends Component {

  state = {
    books: []
  }

  componentDidMount() {
     BooksAPI.getAll().then((books) => {
      this.setState({books});
     })
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
            <Switch>
                <Route exact path='/' render={() => (
                    <BookShelf books={this.state.books}/>
                )}/>
                <Route path='/search' render={() => (
                    <SearchPage/>
                )}/>
            </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default BooksApp
