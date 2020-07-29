import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ShopRegisterPage from './ShopRegisterPage.jsx';
import { fetchCredentials } from '../.././redux/actions/actions';

const mapStateToProps = state => {
  return ({
    username: state.username,
    message: state.message,
    isFetching: state.isFetching,
    title: 'If you own a shop or business on Whidbey Island, sign up here to list your merchandise'
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchCredentials: () => dispatch(fetchCredentials()),
		dispatch: dispatch,
  })
}

const ShopRegisterContainer = connect(mapStateToProps, null)(ShopRegisterPage);
export default ShopRegisterContainer;

