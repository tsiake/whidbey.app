import { normalize } from 'normalizr';
import { fetchUsername, loginAPI, registerAPI, logoutAPI, fetchShops, fetchMyProfile, editProfile, confirmAccount, fetchNotifications, createNotification, sendMessage, fetchMessages } from '../.././api/index';
import { getIsFetching, getMessage } from '../reducers/reducer';

export const fetchCredentials = () => (dispatch, getState) => {

  dispatch({ type: 'NETWORK_REQUEST', isFetching: true });

  return fetchUsername().then(
    response => {
      dispatch({
        type: 'FETCH_USERNAME_SUCCESS',
        isFetching: false,
        username: response.user
      });
    },
    error => {
      dispatch({
        type: 'API_FAILURE',
        isFetching: false,
        message: error.message || 'Failed to acquire username. Try logging in.',
      });
    }
  );
};

export const registerUser = (userObj) => (dispatch) => {

  dispatch({ type: 'NETWORK_REQUEST', isFetching: true });

  registerAPI(userObj).then(
    response => {
      dispatch({
        type: 'REGISTER_USER_SUCCESS',
        isFetching: false,
        message: 'Your account was successfully registered. Check your email for your account confirmation link.'
      });
    },
    error => {
      dispatch({
        type: 'API_FAILURE',
        isFetching: false,
        message: 'Registration failure: Username or e-mail already taken.',
      });
    }
  );
};


export const loginUser = (userObj) => (dispatch) => {

  dispatch({ type: 'NETWORK_REQUEST', isFetching: true });

  loginAPI(userObj).then(
    response => {
      dispatch({
        type: 'LOGIN_USER_SUCCESS',
        isFetching: false,
        username: response.username
      });
    },
    error => {
      dispatch({
        type: 'API_FAILURE',
        isFetching: false,
        message: 'E-mail or password incorrect',
      });
    }
  );
};

export const logoutUser = () => (dispatch) => {

  dispatch({ type: 'NETWORK_REQUEST', isFetching: true });

  logoutAPI().then(
    response => {
      dispatch({
        type: 'LOGOUT_USER_SUCCESS',
        isFetching: false,
        username: null,
        message: 'Thank you for logging out, now returning to the homepage.',
      });
    },
    error => {
      dispatch({
        type: 'API_FAILURE',
        isFetching: false,
        message: 'API Failure - Logout',
      });
    }
  );
};

export const fetchShopList = () => (dispatch, getState) => {

  dispatch({ type: 'NETWORK_REQUEST', isFetching: true });

  return fetchShops().then(
    response => {
      dispatch({
        type: 'FETCH_COMMUNITY_SUCCESS',
        isFetching: false,
        shopsArray: response
      });
    },
    error => {
      dispatch({
        type: 'API_FAILURE',
        isFetching: false,
        message: error.message || 'API Failure',
      });
    }
  );
};

export const fetchMyDetails = () => (dispatch, getState) => {

  dispatch({ type: 'NETWORK_REQUEST', isFetching: true });

  return fetchMyProfile().then(
    response => {
      dispatch({
        type: 'FETCH_MY_DETAILS_SUCCESS',
        isFetching: false,
        profile: response
      });
    },
    error => {
      dispatch({
        type: 'API_FAILURE',
        isFetching: false,
        message: error.message || 'API Failure.',
      });
    }
  );
};

export const editMyProfile = (edited) => (dispatch, getState) => {

  dispatch({ type: 'NETWORK_REQUEST', isFetching: true });

  return editProfile(edited).then(
    response => {
      dispatch({
        type: 'UPDATE_PROFILE_SUCCESS',
        isFetching: false,
      });
    },
    error => {
      dispatch({
        type: 'API_FAILURE',
        isFetching: false,
        message: error.message || 'API Failure.',
      });
    }
  );
};

export const confirmMyAccount = (confUrl) => (dispatch, getState) => { 

  dispatch({ type: 'NETWORK_REQUEST', isFetching: true });

  return confirmAccount(confUrl).then(
    response => {
      dispatch({
        type: 'CONFIRM_ACCOUNT_SUCCESS',
        isFetching: false,
        message: 'Thank you for confirming your account. Please login now.',
      });
    },
    error => {
      dispatch({
        type: 'API_FAILURE',
        isFetching: false,
        message: error.message || 'API Failure ',
      });
    }
  );
};

export const fetchMyNotifications = () => (dispatch, getState) => { 

  dispatch({ type: 'NETWORK_REQUEST', isFetching: true });

  return fetchNotifications().then(
    response => {
      dispatch({
        type: 'FETCH_NOTIFICATIONS_SUCCESS',
        isFetching: false,
        notArray: response,
      });
    },
    error => {
      dispatch({
        type: 'API_FAILURE',
        isFetching: false,
        message: error.message || 'API Failure ',
      });
    }
  );
};

export const createMyNotification = (notification_info) => (dispatch, getState) => {

  dispatch({ type: 'NETWORK_REQUEST', isFetching: true });

  return createNotification(notification_info).then(
    response => {
      dispatch({
        type: 'CREATE_NOTIFICATION_SUCCESS',
        isFetching: false,
        message: 'notification sent',
      });
    },
    error => {
      dispatch({
        type: 'API_FAILURE',
        isFetching: false,
        message: error.message || 'API Failure.',
      });
    }
  );
};

export const sendMyMessage = (msg_pkg) => (dispatch, getState) => {

  dispatch({ type: 'NETWORK_REQUEST', isFetching: true });

  return sendMessage(msg_pkg).then(
    response => {
      dispatch({
        type: 'SEND_MESSAGE_SUCCESS',
        isFetching: false,
        message: 'Message sent',
      });
    },
    error => {
      dispatch({
        type: 'API_FAILURE',
        isFetching: false,
        message: error.message || 'API Failure.',
      });
    }
  );
};

export const fetchMyMessages = () => (dispatch, getState) => {

  dispatch({ type: 'NETWORK_REQUEST', isFetching: true });

  return fetchMessages().then(
    response => {
      dispatch({
        type: 'FETCH_MESSAGES_SUCCESS',
        isFetching: false,
        message: 'Messages received',
        myMessagesArray: response,
      });
    },
    error => {
      dispatch({
        type: 'API_FAILURE',
        isFetching: false,
        message: error.message || 'API Failure.',
      });
    }
  );
};
