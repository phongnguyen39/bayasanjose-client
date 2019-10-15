import React, { Component } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div id='background_img'>
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
              <p>Open Weekends from 6:00 AM to 5:00PM</p>
              <a className='nav_links' href='https://www.bayasanjose.com/contact-us'>Contact Us</a>
              <a className='nav_links' href='http://www.google.com/url?q=http%3A%2F%2Fwww.facebook.com%2Fbayasanjose%2F&sa=D&sntz=1&usg=AFQjCNFgZAegb7HTvhKdBMubHiI8Vu1Uyg'>Facebook</a>
            </div>


          </div>
        </div>
      </div>
    )
  }
}

export default App;
