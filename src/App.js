import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    axios.get('/api/book')
      .then(res => {
        this.setState({ books: res.data });
        console.log(this.state.books);
      });
  }

  render() {
    return (
      <div>
        <Navbar/>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4">View all Books</h1>
              <p class="lead">View and borrow books from our huge collection of amazing functions</p>
            </div>
          </div>
        <div class="container">
          <div class="panel-body">
          <Link to="/create"><button type="button" class="btn btn-outline-primary">Add Book</button></Link>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>ISBN</th>
                  <th>Title</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                {this.state.books.map(book =>
                  <tr>
                    <td><Link to={`/show/${book._id}`}>{book.isbn}</Link></td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
