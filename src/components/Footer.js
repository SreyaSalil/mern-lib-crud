import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './css/Footer.css';

class Footer extends Component {

    render() {
        return (

            
            <footer class="foot">
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <center>  
                    <h4> 
                        ReadStop
                    </h4>
                <h4>Follow us on </h4>
                </center>

                <div class="footer-social-icons">

                    <a href="https://www.google.com/" class="social-icon"> <i class="fa fa-facebook"></i></a>
                    <a href="https://www.google.com/" class="social-icon"> <i class="fa fa-twitter"></i></a>
                    <a href="https://www.google.com/" class="social-icon"> <i class="fa fa-instagram"></i></a>
                    <a href="https://www.google.com/" class="social-icon"> <i class="fa fa-youtube"></i></a>
                    <a href="https://www.google.com/" class="social-icon"> <i class="fa fa-linkedin"></i></a>
                    <a href="https://www.google.com/" class="social-icon"> <i class="fa fa-google-plus"></i></a>

                </div>
                <center>
                <p>
                    @copyright 2021
                </p>
                </center>
            </footer>

        );
    }
}
export default Footer;
