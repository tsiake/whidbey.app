import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchCredentials, loginUser, registerUser} from '../.././redux/actions/actions';
import PaginationBar from './PaginationBar.jsx';

const mapStateToProps = state => {
	return ({ 
    shops: state.shops,
    page: state.page,
    state
	})
}

const mapDispatchToProps = dispatch => {
	return ({
    dispatch,
	})
}

const PaginationContainer = connect(mapStateToProps, mapDispatchToProps)(PaginationBar);
export default PaginationContainer;
