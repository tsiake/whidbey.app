import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Button, Nav, Navbar, NavDropdown, Form, FormControl } from 'react-bootstrap';

// will need to get props from App passed in, then depending on whether logged in, show login/register or profile/logout

class NavBar extends React.Component {
  constructor() {
    super();
      this.state = {
          whichKey: 0,
          searchType: "shops",
          itemType: "",
          inputOptions: [
            "All Shops", "Appliances", "Art", "Books", "Food", "Furnishings", "Gardening", "Gift Shops", "Handmade Goods", "Imported Goods", "Jewelry", "Tech", "Delivery", "Dining"
          ],
          optionIcons: [
            <img src="/assets/icons/0.png" alt="All" width="50" height="50"/>,
            <img src="/assets/icons/1.png" alt="Appliances" width="50" height="50"/>,
            <img src="/assets/icons/2.png" alt="Art" width="50" height="50"/>,
            <img src="/assets/icons/3.png" alt="Books" width="50" height="50" />,
            <img src="/assets/icons/4.png" alt="Food" width="50" height="50" />,
            <img src="/assets/icons/5.png" alt="Furnishings" width="50" height="50" />,
            <img src="/assets/icons/6.png" alt="Gardening" width="50" height="50" />,
            <img src="/assets/icons/7.png" alt="Handmade" width="50" height="50" />,
            <img src="/assets/icons/8.png" alt="Imported" width="50" height="50" />,
            <img src="/assets/icons/9.png" alt="Jewelry" width="50" height="50" />,
            <img src="/assets/icons/10.png" alt="Tech" width="50" height="50" />
          ],

          inputOption: "All Shops",
          Register: <Nav.Link href="/register" className="link">Register</Nav.Link>,
          Login: <Nav.Link href="/login" className="link">Log in</Nav.Link>,
          LoggedIn: <Nav.Link href='/profile' className="link"><img src="/assets/icons/Profile.png" alt="" width="50" height="50" /></Nav.Link>,
          Logout: <Nav.Link className="link" onClick={(e) => this.props.logoutUser()}><img src="/assets/icons/Logout.png" alt="" width="50" height="50" /></Nav.Link>,
          gotMail: <Nav.Link className="link" href="/messages"><img src="/assets/icons/Mail-received.png" alt="Messages received" width="50" height="50" /></Nav.Link>,
          noMail: <Nav.Link className="link" href="/messages"><img src="/assets/icons/Mail.png" alt="No messages" width="50" height="50" /></Nav.Link>,
      }
      this.handleInputChange = this.handleInputChange.bind(this);
  } 

  componentDidMount() {
    this.props.fetchCredentials();
  }

  handleInputChange (eventKey, evt) {
    console.log("event key: " + eventKey);
    this.setState({inputOption: this.state.inputOptions[eventKey-1]});
    this.setState({whichKey: eventKey-1});
  }

  render() {
    return(
<Navbar expand="lg" className="navbar_full">
  <Navbar.Brand href="/" style={{fontFamily: 'Poppins-Light', backgroundColor:'#ffffff', color: '#222222'}}><img src="/assets/img/swb.png" alt="whidbey.io" width="66.25" height="50" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
      <NavDropdown
        title={
          <div className="title-dropdown">
            <img src={"/assets/icons/" + this.state.whichKey + ".png"} alt="" width="50" height="50" />
            {'\u00A0'}
            {this.state.inputOption}
          </div> 
          }
          id="basic-nav-dropdown" onSelect={this.handleInputChange}>
      { this.state.inputOptions.map((opt, i) => (
          <NavDropdown.Item key={i+1} eventKey={i+1} value={opt}><img src={"/assets/icons/" + i + ".png"} alt="" width="50" height="50" /> { opt } </NavDropdown.Item>
      ))} 
      </NavDropdown>
    <Form inline className="inline_nav">
      <FormControl type="text" className="mr-sm-2 nav_search" /> 
      <Link to={"/search/" + this.state.searchType + "/" + this.state.inputOption + "/1"} className="wb"><img src="/assets/icons/Search.png" alt="" width="50" height="50" /></Link>
    </Form>
    {
      this.props.username
        ? this.props.mail 
          ? this.state.gotMail 
          : this.state.noMail
        : ''
    }
    { this.props.username ? this.state.LoggedIn : '' }
    { this.props.username ? '' : this.state.Register }
    { this.props.username ? '' : this.state.Login }
    { this.props.username ? this.state.Logout : '' }
  </Navbar.Collapse>
</Navbar>

    );
      
  }
}

export default NavBar;
