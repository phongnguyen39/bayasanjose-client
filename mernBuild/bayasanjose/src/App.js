import React, { Component } from 'react';
import './App.css';
import Contact from './Contact/Contact';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// https://codingthesmartway.com/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-1/
// TODO: Left off at routing section.  Adding Routing and it works, but need to tailor it to the Bays site structure

class App extends Component {
  render() {
    return (
      <Router>
      <div id='background_img'>
        </div>
        <div className='container'>
          <link href="https://fonts.googleapis.com/css?family=Archivo&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"></link>
          <h1 id="lg-font">BAY A CLEANING SERVICES</h1>

          <div class="navlinks">
            <a class="nav_links" href="#">Promotions</a>
            <a class="nav_links" href="#services">Services</a>
            <a class="nav_links" href="#contact">Contact Us</a>
            {/* <!-- <ul>
                    <li><a class="navlinks" href="#">Promotions</a></li>
                    <li><a class="navlinks" href="#services">Services</a></li>
                    <li><a class="navlinks" href="#contact">Contact Us</a></li>
                </ul> -->
                <!-- <li><a href="#">Schedule an Appointment</a></li> -->
                <!-- <a href="#">Claims Form</a> -->
                <!-- <li><a href="#">Business Partners</a></li>
                                            <li><a href="#">Jobs</a></li> --> */}
            <p id="lg-font" className="box-header">'The objective of cleaning is not just to clean, but to feel happiness living within that environment'-Marie Kondo</p>

            



            <div className='horizontal_nav'>
              <Route path='/' exact component={Contact}/>
              <p>Open Weekends from 6:00 AM to 5:00PM</p>
              <a className='nav_links' href='https://www.bayasanjose.com/contact-us'>Contact Us</a>
              <a className='nav_links' href='http://www.google.com/url?q=http%3A%2F%2Fwww.facebook.com%2Fbayasanjose%2F&sa=D&sntz=1&usg=AFQjCNFgZAegb7HTvhKdBMubHiI8Vu1Uyg'>Facebook</a>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
