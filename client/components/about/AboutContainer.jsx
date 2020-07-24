import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchCredentials, loginUser, registerUser} from '../.././redux/actions/actions';
import About from './About.jsx';

const mapStateToProps = state => {
	return ({ 
		username: state.username,
		profile: state.profile,
	})
}

const mapDispatchToProps = dispatch => {
	return ({
		loadUser: () => dispatch(fetchCredentials()),
	})
}

const AboutContainer = connect(mapStateToProps, mapDispatchToProps)(About);
export default AboutContainer;
