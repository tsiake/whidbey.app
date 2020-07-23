// react libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import { Redirect } from 'react-router';

// styles
import './css/app.css';
import './css/footer.css';
import './bootstrap/dist/css/bootstrap.min.css';

// components
// import HomeContainer from './components/home/HomeContainer.jsx';
import NavbarContainer from './components/nav/NavbarContainer.jsx';
import Footer from './components/nav/Footer.jsx';
import RegisterContainer from './components/account/RegisterContainer.jsx';
import Home from './components/home/LP.jsx';

//actions

class App extends React.Component {

	constructor() {
		super()
	}

	componentDidMount() {
	}

	render() {
		return (
			<div className = "App">
				<Router>
					<div className = "app_content">
						<div className = "main_content">
							<NavbarContainer />
							<Switch>
                                <Route exact path="/" component = { Home } />
                                <Route exact path="/register" component = { RegisterContainer } />
                                <Route exact path="/discord"> <Redirect to="https://discord.gg/BukGnYw" /> </Route>
							</Switch>
                            <Footer />
						</div>
					</div>
                </Router>
            </div>
		);
	};

}

export default App;
