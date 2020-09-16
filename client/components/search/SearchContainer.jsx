import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchCredentials, loginUser, registerUser} from '../.././redux/actions/actions';
import LandingPage from './SearchPage.jsx';

const mapStateToProps = state => {
	return ({ 
		username: state.username,
    inputOption: state.inputOption,
    shops: state.shops,
		profile: state.profile,
    state
	})
}

const mapDispatchToProps = dispatch => {
	return ({
		loadUser: () => dispatch(fetchCredentials()),
    dispatch,
	})
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(LandingPage);
export default SearchContainer;
