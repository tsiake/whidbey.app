import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchCredentials, loginUser, registerUser} from '../.././redux/actions/actions';
import LandingPage from './LP.jsx';

const mapStateToProps = state => {
	return ({ 
		username: state.username,
		profile: state.profile,
	})
}

const mapDispatchToProps = dispatch => {
	return ({
		loadUser: () => dispatch(fetchCredentials())
	})
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(LandingPage);
export default HomeContainer;
