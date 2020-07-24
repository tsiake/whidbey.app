import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import LoginPage from './LoginPage.jsx';
import { fetchMyDetails } from '../.././redux/actions/actions';

const mapStateToProps = state => {
  return ({
    username: state.username,
    message: state.message
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchMyDetails: () => dispatch(fetchMyDetails()),
		dispatch: dispatch,
  })
}

const LoginContainer = connect(mapStateToProps, null)(LoginPage);
export default LoginContainer;

