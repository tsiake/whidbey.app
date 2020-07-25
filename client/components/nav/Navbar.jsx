import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

// will need to get props from App passed in, then depending on whether logged in, show login/register or profile/logout

class NavBar extends React.Component {
  constructor() {
    super();
      this.state = {
          Register: <Link to="/register" style={{color:'#008457', textDecoration: 'none'}}><div className="header_link">Register</div></Link>,
          Login: <Link to="/login" style={{color:'#008457', textDecoration: 'none'}}><div className="header_link">Log in</div></Link>,
          LoggedIn: <Link to='/profile' style={{color:'#008457', textDecoration: 'none'}}><div className="header_link">Settings</div></Link>,
          Logout: <Link onClick={(e) => this.props.logoutUser()} style={{color:'#008457', textDecoration: 'none'}}><div className="header_link">Logout</div></Link>

      }
  } 

  render() {
    return(
      <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'#fef9ef', color:'#008457'}}>
        <Navbar.Brand href="/">
          <img src="../.././assets/img/android-chrome-192x192.png" alt="whidbey.io" width="50" height="50" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/browse/items" style={{color:'#008457', textDecoration: 'none'}}><div className="header_link">Browse</div></Link> 
            <Link to="/browse/shops" style={{color:'#008457', textDecoration: 'none'}}><div className="header_link">Shops</div></Link>
          </Nav>
          <Nav>
              { this.props.username ? this.state.LoggedIn : '' }
              { this.props.username ? '' : this.state.Register }
              { this.props.username ? '' : this.state.Login }
              { this.props.username ? this.state.Logout : '' }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
      
  }
}

export default NavBar;
