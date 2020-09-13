import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Button, Nav, Navbar, NavDropdown, Form, FormControl } from 'react-bootstrap';

// will need to get props from App passed in, then depending on whether logged in, show login/register or profile/logout

class NavBar extends React.Component {
  constructor() {
    super();
      this.state = {
          input: '',
          Register: <Nav.Link href="/register" className="link">Register</Nav.Link>,
          Login: <Nav.Link href="/login" className="link">Log in</Nav.Link>,
          LoggedIn: <Nav.Link href='/profile' className="link">Settings</Nav.Link>,
          Logout: <Nav.Link className="link" onClick={(e) => this.props.logoutUser()}>Logout</Nav.Link>
      }
      this.handleInputChange = this.handleInputChange.bind(this);
  } 

  componentDidMount() {
    this.props.fetchCredentials();
  }

  handleInputChange (evt) {
    this.setState({input: evt.target.value});
  }

  render() {
    return(
<Navbar expand="lg" className="navbar_full">
  <Navbar.Brand href="/" style={{fontFamily: 'Poppins-Light', backgroundColor:'#ffffff', color: '#222222'}}>whidbey.io</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
      <NavDropdown title="All Shops" id="basic-nav-dropdown">
        <NavDropdown.Item>Art</NavDropdown.Item>
        <NavDropdown.Item>Delivery</NavDropdown.Item>
        <NavDropdown.Item>Fruits</NavDropdown.Item>
      </NavDropdown>
    <Form inline className="inline_nav">
      <FormControl type="text" placeholder="Search" className="mr-sm-2 nav_search" /> 
      <div className="wb">Search</div>
    </Form>
    { this.props.username ? this.state.LoggedIn : '' }
    { this.props.username ? this.state.Logout : '' }

    { this.props.username ? '' : this.state.Register }
    { this.props.username ? '' : this.state.Login }
  </Navbar.Collapse>
</Navbar>

    );
      
  }
}

export default NavBar;
