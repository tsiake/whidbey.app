import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Patch from './Patch.jsx';

const mapStateToProps = state => {
	return ({ 
	})
}

const mapDispatchToProps = dispatch => {
	return ({
	})
}

const PatchContainer = connect(mapStateToProps, mapDispatchToProps)(Patch);
export default PatchContainer;
