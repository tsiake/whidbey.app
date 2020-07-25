import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ShopRegisterPage from './ShopRegisterPage.jsx';

const mapStateToProps = state => {
  return ({
    username: state.username,
    message: state.message,
    title: 'If you own a shop or business on Whidbey Island, sign up here to list your merchandise'
  })
}

const mapDispatchToProps = dispatch => {
  return ({
		dispatch: dispatch,
  })
}

const ShopRegisterContainer = connect(mapStateToProps, null)(ShopRegisterPage);
export default ShopRegisterContainer;

