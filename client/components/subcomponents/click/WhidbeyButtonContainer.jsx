import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import WhidbeyButton from './WhidbeyButton.jsx';

const mapStateToProps = state => {
	return ({ 
		username: state.username,
	})
}

const mapDispatchToProps = dispatch => {
	return ({

	})
}

const WhidbeyButtonContainer = connect(mapStateToProps, mapDispatchToProps)(WhidbeyButton);
export default WhidbeyButtonContainer;
