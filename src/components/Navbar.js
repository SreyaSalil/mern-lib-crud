import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './css/Navbar.css'

class Navbar extends Component {

    render() {
        return (
            <header>
                <div class="container">
                    <div class="nav">
                        <h2>ReadStop</h2>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/view">View Books</a></li>
                            <li><a href="#Footer">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}
export default Navbar;
