import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from './Footer'
import Navbar from './Navbar'

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      book: {}
    };
  }

  componentDidMount() {
    axios.get('/api/book/' + this.props.match.params.id)
      .then(res => {
        this.setState({ book: res.data });
        console.log(this.state.book);
      });
  }

  delete(id) {
    console.log(id);
    axios.delete('/api/book/' + id)
      .then((result) => {
        this.props.history.push("/view")
      });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div class="card" >
          <div class="card-body">
            <h5 class="card-title">{this.state.book.title}</h5>
            <p class="card-text">{this.state.book.description}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ISBN: {this.state.book.isbn}</li>
            <li class="list-group-item">Author: {this.state.book.author}</li>
            <li class="list-group-item">Published Year: {this.state.book.published_year}</li>
            <li class="list-group-item">Publisher: {this.state.book.publisher}</li>
          </ul>
          <div class="card-body">
            <Link to={`/edit/${this.state.book._id}`}><button class="btn btn-success">Edit</button></Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.book._id)} class="btn btn-danger">Delete</button>
          </div>
        </div>
        <Footer />
      </div>

    );
  }
}

export default Show;
