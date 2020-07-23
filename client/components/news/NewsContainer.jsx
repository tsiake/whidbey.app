import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import News from './News.jsx';

const mapStateToProps = state => {
	return ({ 
	})
}

const mapDispatchToProps = dispatch => {
	return ({
	})
}

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);
export default NewsContainer;
