import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import RegisterPage from './RegisterPage.jsx';

const mapStateToProps = state => {
  return ({
    title: 'Account Registration',
    lpmessage: 'Please register',
    message: state.message
  })
}

const mapDispatchToProps = dispatch => {
  return ({
		dispatch: dispatch,
  })
}

const RegisterContainer = connect(mapStateToProps, null)(RegisterPage);
export default RegisterContainer;

