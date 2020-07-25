import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
	render () {
		return (
			<div id="footer">
        <Link to="/shop-registration">Are you a shop owner on Whidbey Island?</Link>
			</div>
		)
	}
}

export default Footer;
