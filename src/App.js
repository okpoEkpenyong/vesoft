import { Nav, Navbar, Form, Button, FormControl, NavDropdown, Container } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";
import "./App.css";
import logo from "./img/internet.svg";
import Section from "./components/Section";
import React, { useState, useEffect, useContext } from "react";


const App = (props) => {

const [showMessage, setShowMessage] = React.useState(false)
 const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Navbar bg="primary" variant="dark" expand="xl" fixed="top">
      <a >  <Navbar.Text className="text-vsoft">
      <img src={logo}  className="nav-logo " alt="Logo" onClick={scrollToTop}/> VESOFT LTD
       </Navbar.Text>  </a> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <>
            <Nav className="mr-auto">
              <Link className="nav-item " href="/home" activeClass="active" to="section1" spy={true} smooth={true} offset={-70} duration={500}>
                HOME
              </Link>
              <Link className="nav-item " href="/services" activeClass="active" to="section2" spy={true} smooth={true} offset={-70} duration={500}>
                SERVICES
              </Link>
              <Link className="nav-item " href="/about" activeClass="active" to="section3" spy={true} smooth={true} offset={-70} duration={500}>
                ABOUT
              </Link>
              <Link className="nav-item " href="/contact" activeClass="active" to="section4" spy={true} smooth={true} offset={-70} duration={500}>
                CONTACT
              </Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
               <Button variant="outline-light">Search</Button>
           </Form>
          </>
        </Navbar.Collapse>
      </Navbar>
      <br />
      <br />

  <div className="App">
        <header className="App-header">
          <Section id="section1" />
          <img src={logo} className="App-logo" alt="logo" />
          <h3 className="title-color">VESOFT</h3>
          <Navbar.Text className="subtitle-color"> Unique software solutions</Navbar.Text>
        </header>
      <div className="what-we-do">
        <Section id="section2"  />
        <Navbar.Text className="wwd"> What We Do</Navbar.Text>

        <ul>
            <li>Software Development and Sales</li>
            <li>Career Development and Mentoring</li>
            <li>Online and Drop-in Coding School</li>
            <li>Engineering Software</li>
            <li>STEM Test Prep</li>
            <li>Hackathons</li>
            <li>Olympiads Prep</li>
        </ul>
        <div className="oge"> MATERIAL BALANCE</div> 
        <div className="fa"> FLOW ASSURANCE</div> 
        <div className="mb"> OIL & GAS ENGNRG.</div> 
        <div className="javascript"> JAVASCRIPT</div>
        <div className="py"> PYTHON</div> 
        <div className="java"> JAVA</div> 
        <div className="wb"> WEB DEVELOPMENT</div> 
      </div>
      <div className="subtext">
      <Section id="section3"/>
        <Navbar.Text className="after-header"> About Us</Navbar.Text>
      <Navbar.Text>
              VESOFT is founded on the principle of excellence and service. We think of ways that software can impact your business and mankind in general. 
              At VESOFT we are constantly pushing boundaries, believing that nothing is impossible if you just believe.
              At the core of our business are employees development and client satisfaction. We believe that good work speaks for itself and so we strive to distinctively satisfy
              a single customer. To keep us abreast of current needs, we adopt Research and Development in our software solutions. We keenly study the gaps in a field of endeavour 
              and boldly design a solution for it. We want to do that very thing that people initially thought was impossible or are written off, for we have studied the world and
              conclude that that unique solution will eventually make a difference.
              For instance we've noticed that teaching someone to code without effective mentoring, usually yields a negative result. So, at VESOFT we operate an effective mentoring
              and drop-in program to reduce that drag in the system
      </Navbar.Text>
      </div>
      <div className="subtext">
         <Section id="section4" />
         <Navbar.Text className="after-header">Contact Us</Navbar.Text> <br/>
         <Navbar.Text >
                VESOFT LTD <br />
                1 Chima Close, Behind Omega House. <br />
                Rumuodara, Port Harcourt. <br />
                Rivers State. <br />
                ekpes.okpo@gmail.com 
         </Navbar.Text> 
         <p>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.62564419307!2d7.0373316698548445!3d4.862354644227264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d27a00fc368d%3A0x1e357b1ff840ebdf!2sOmega%20House%20Power%20Arena.!5e0!3m2!1sen!2sng!4v1580383641657!5m2!1sen!2sng" 
         height="450" width="800" frameborder="0"  allowfullscreen > 
         </iframe>
         </p>
      </div>
  </div>
  <br/>
    </>

  );

}

export default App;