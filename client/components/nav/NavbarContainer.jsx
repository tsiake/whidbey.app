import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar.jsx';
import { logoutUser } from '../.././redux/actions/actions';

// container component for nav

const mapStateToProps = state => {
	return ({
        username: state.username
	})
}

const mapDispatchToProps = dispatch => {
	return ({
    logoutUser: () => dispatch(logoutUser()),
		dispatch,
	})
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);
export default NavbarContainer;
