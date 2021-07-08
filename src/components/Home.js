import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './css/Home.css';
import Navbar from './Navbar'
import Footer from './Footer'

class Home extends Component {

    render() {
    return (
      <div>
        <Navbar/>
        <section id="title">
          <div class="head">
            <center>
            <h1>WELCOME TO READSTOP</h1>
            </center>
          </div>
          
         
        </section>
        <div class="about-2">
            <h2 class="about-head-1">ABOUT US
            </h2>
            <p class="about-text">This website provides a computerized version of library management system which will benefit the students as well as the staff of the library.
It makes entire process online where student can search books, staff can generate reports and
do book transactions.</p>
        </div>  
        <Footer/>
      </div>
    );
  }
}

export default Home;
