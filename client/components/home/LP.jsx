import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class LandingPage extends React.Component {

	componentDidMount() {
	}

	render() {
		return (
    <div className="homepage">
              <h1><small>Whidbey.io is currently in development...</small></h1>
              <p>If you are a store owner or sell items on Whidbey Island, be sure to sign up! We'll email you once we're running!</p>
              <p>To get started,<Link to="/register"><div className="reg_link">Register Here</div></Link> or if you're already logged in, <Link to="/shop-registration"><div className="reg_link">Register your Shop here</div></Link></p>
            </div>
		)
	}
}

export default LandingPage;
