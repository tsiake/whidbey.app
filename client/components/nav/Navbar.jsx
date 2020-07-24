import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

// will need to get props from App passed in, then depending on whether logged in, show login/register or profile/logout

class NavBar extends React.Component {
  constructor() {
    super();
      this.state = {
          Register: <Link to="/register" style={{color:'#008457', textDecoration: 'none'}}><div className="header_link">Register</div></Link>,
          Login: <Link to="/login" style={{color:'#008457', textDecoration: 'none'}}><div className="header_link">Login</div></Link>,
          LoggedIn: <NavDropdown title='Your Account' id="collasible-nav-dropdown" style={{color:'#008457', textDecoration: 'none'}}> <NavDropdown.Item><Link to="/profile"><div className="header_link">View Profile</div></Link></NavDropdown.Item> <NavDropdown.Divider /> <NavDropdown.Item><Link to="/dm"><div className="header_link">Messages</div></Link> </NavDropdown.Item> </NavDropdown>,
          Logout: <Link to='/logout' style={{color:'#008457', textDecoration: 'none'}}><div className="header_link">Logout</div></Link>

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
              { this.state.username ? this.state.LoggedIn : '' }
              { this.state.username ? '' : this.state.Register }
              { this.state.username ? '' : this.state.Login }
              { this.state.username ? this.state.Logout : '' }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
      
  }
}

export default NavBar;
