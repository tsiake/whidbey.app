import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ShopRegisterPage from './ShopRegisterPage.jsx';

const mapStateToProps = state => {
  return ({
    message: state.message
  })
}

const mapDispatchToProps = dispatch => {
  return ({
		dispatch: dispatch,
  })
}

const ShopRegisterContainer = connect(mapStateToProps, null)(ShopRegisterPage);
export default ShopRegisterContainer;

