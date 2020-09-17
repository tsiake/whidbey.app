// react libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import { Redirect } from 'react-router';

// styles
import './assets/bootstrap/dist/css/bootstrap.min.css';
import './assets/css/app.css';

// components
import HomeContainer from './components/home/HomeContainer.jsx';
import SearchContainer from './components/search/SearchContainer.jsx';
import NavbarContainer from './components/nav/NavbarContainer.jsx';
import Footer from './components/nav/Footer.jsx';
import RegisterContainer from './components/account/RegisterContainer.jsx';
import ShopRegisterContainer from './components/shop/ShopRegisterContainer.jsx';
import LoginContainer from './components/account/LoginContainer.jsx';
import accConfirmContainer from './components/account/accConfirmContainer.jsx';

//actions

class App extends React.Component {

  constructor() {
    super()
  }

  componentDidMount() {
    this.props.fetchCredentials;
  }

  render() {

    return (
      <div className = "App">
        <Router>
          <NavbarContainer />
          <div className = "web_content">
            <Switch>
              <Route exact path="/" component = { HomeContainer } />
              <Route exact path="/search/:search_type" component = { SearchContainer } />
              <Route exact path="/register" component = { RegisterContainer } />
              <Route exact path="/shop-registration" component = { ShopRegisterContainer } />
              <Route exact path="/login" component = { LoginContainer } />
              <Route path="/confirm/:user_id" component = { accConfirmContainer } />
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    );
  };
}

export default App;
