import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import WhidbeyTextInput from './WhidbeyTextInput.jsx';

const mapStateToProps = state => {
	return ({ 
		username: state.username,
	})
}

const mapDispatchToProps = dispatch => {
	return ({

	})
}

const WhidbeyTextInputContainer = connect(mapStateToProps, mapDispatchToProps)(WhidbeyTextInput);
export default WhidbeyTextInputContainer;
