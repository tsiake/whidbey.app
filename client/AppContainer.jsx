import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import App from './App.jsx';
import { fetchCredentials, loginUser, logoutUser, registerUser, fetchShopList, fetchMyDetails, editMyProfile, confirmMyAccount, fetchMyNotifications, createMyNotification, sendMyMessage, fetchMyMessages} from './redux/actions/actions';

const mapStateToProps = state => {
  return({
    username: state.username,
    message: state.message
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchCredentials: () => dispatch(fetchCredentials()),
    dispatch,
  })
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;
