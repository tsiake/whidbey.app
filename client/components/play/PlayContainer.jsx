import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Play from './Play.jsx';

const mapStateToProps = state => {
	return ({ 
	})
}

const mapDispatchToProps = dispatch => {
	return ({
	})
}

const PlayContainer = connect(mapStateToProps, mapDispatchToProps)(Play);
export default PlayContainer;
