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
          shopType: "",
          itemType: "",
          inputOptions: [
            "All Shops", "Art", "Books", "Food & Baked Goods", "Furnishings", "Gardening", "Gift Shops", "Handmade Goods", "Imported Goods", "Jewelry"
          ],
          optionIcons: [
            <img />,
            <img />,
            <img src="./assets/icons/Books.png" alt="Books" width="50" height="50" />,
            <img src="./assets/icons/Fresh-grocery-bread.png" alt="Food" width="50" height="50" />,
            <img src="./assets/icons/Furnishings.png" alt="Furnishings" width="50" height="50" />,
            <img src="./assets/icons/Garden.png" alt="Gardening" width="50" height="50" />,
            <img src="./assets/icons/Handmade.png" alt="Handmade" width="50" height="50" />,
            <img src="./assets/icons/Imported.png" alt="Imported" width="50" height="50" />,
            <img src="./assets/icons/Jewelry.png" alt="Jewelry" width="50" height="50" />,
          ],

          inputOption: "All Shops",
          Register: <Nav.Link href="/register" className="link">Register</Nav.Link>,
          Login: <Nav.Link href="/login" className="link">Log in</Nav.Link>,
          LoggedIn: <Nav.Link href='/profile' className="link">Settings</Nav.Link>,
          Logout: <Nav.Link className="link" onClick={(e) => this.props.logoutUser()}>Logout</Nav.Link>,
          gotMail: <Nav.Link className="link" href="/messages"><img src="./assets/icons/Mail-received.png" alt="Messages received" width="50" height="50" /></Nav.Link>,
          noMail: <Nav.Link className="link" href="/messages"><img src="./assets/icons/Mail.png" alt="No messages" width="50" height="50" /></Nav.Link>,
          shopType: '',
          
      }
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleShopSearch = this.handleShopSearch.bind(this);
  } 

  componentDidMount() {
    this.props.fetchCredentials();
  }

  handleInputChange (eventKey, evt) {
    this.setState({inputOption: this.state.inputOptions[eventKey]});
    this.setState({whichKey: eventKey});
    if(this.state.inputOption == "All Shops") {
      this.setState({shopType: ""});
    } else {
      this.setState({shopType: this.state.inputOption});
    }
  }

  handleShopSearch () {
    let path = '/search/shops';
    this.props.history.push(path);
  }

  render() {
    return(
<Navbar expand="lg" className="navbar_full">
  <Navbar.Brand href="/" style={{fontFamily: 'Poppins-Light', backgroundColor:'#ffffff', color: '#222222'}}>whidbey.io</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
      <NavDropdown 
        title={
          <div className="title-dropdown">
            <img src={"./assets/icons/" + this.state.whichKey + ".png"} alt="" width="50" height="50" />
            {this.state.inputOption}
          </div> 
          }
          id="basic-nav-dropdown" onSelect={this.handleInputChange}>
      { this.state.inputOptions.map((opt, i) => (
          <NavDropdown.Item key={i} eventKey={i} value={opt}><img src={"./assets/icons/" + i + ".png"} alt="" width="50" height="50" /> { opt } </NavDropdown.Item>
      ))} 
        <NavDropdown.Divider />
        <NavDropdown.Item value="Delivery">
          Delivery
        
        </NavDropdown.Item>
        <NavDropdown.Item value="Dining">
          Dining
        
        </NavDropdown.Item>
      </NavDropdown>
    <Form inline className="inline_nav">
      <FormControl type="text" className="mr-sm-2 nav_search" /> 
      <Link to={"/search/" + this.state.searchType + "/" + this.state.shopType} className="wb">Search</Link>
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
