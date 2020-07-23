import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, browserHistory } from 'react-router';
import AppContainer from './AppContainer.jsx';

class Root extends React.Component {
	render() {
		return (
			<div className="Root">
				<Router history = {browserHistory}>
					<Switch>
						<Route path ="/" component = { AppContainer } />
					</Switch>
				</Router>
			</div>
		);
	};
};

Root.propTypes = {
	store: PropTypes.object.isRequired,
};

export default Root;
