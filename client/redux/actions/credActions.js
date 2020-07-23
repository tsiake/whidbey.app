import { normalize } from 'normalizr';
//import * as schema from './schema';
import { fetchUsername, loginAPI, registerAPI, logoutAPI, fetchCommunity, fetchUserProfile, fetchMyProfile, editProfile, confirmAccount, fetchNotifications, fetchFriends, sendNotification, addFriend, rejectFriend, alreadyRequested, sendMessage, fetchFriendsProfiles, fetchMessages } from '../.././api/index'
import { getIsFetching, getMessage } from '../reducers/exlang';

export const fetchCredentials = () => (dispatch, getState) => {
/*	if(getIsFetching(getState())) {
		return Promise.resolve();
	}
*/

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
/*	if(getIsFetching(getState())) {
		return Promise.resolve();
	}
*/

	dispatch({ type: 'NETWORK_REQUEST', isFetching: true });

	// rename apis
	registerAPI(userObj).then(
		response => {
			dispatch({
				type: 'REGISTER_USER_SUCCESS',
				isFetching: false,
				message: 'Your account was successfully registered. You may now log in to the Intrepid server.'
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
/*	if(getIsFetching(getState())) {
		return Promise.resolve();
	}
*/

	dispatch({ type: 'NETWORK_REQUEST', isFetching: true });

	// rename apis
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
/*	if(getIsFetching(getState())) {
		return Promise.resolve();
	}
*/

	dispatch({ type: 'NETWORK_REQUEST', isFetching: true });

	// rename apis
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

export const fetchCommunityList = () => (dispatch, getState) => {
/*	if(getIsFetching(getState())) {
		return Promise.resolve();
	}
*/

	dispatch({ type: 'NETWORK_REQUEST', isFetching: true });

	return fetchCommunity().then(
		response => {
			dispatch({
				type: 'FETCH_COMMUNITY_SUCCESS',
				isFetching: false,
				commObj: response
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

export const fetchUserDetails = (user_id) => (dispatch, getState) => {
/*	if(getIsFetching(getState())) {
		return Promise.resolve();
	}
*/

	dispatch({ type: 'NETWORK_REQUEST', isFetching: true });

	return fetchUserProfile(user_id).then(
		response => {
			dispatch({
				type: 'FETCH_USER_DETAILS_SUCCESS',
				isFetching: false,
				selectedUser: response
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

export const fetchMyDetails = () => (dispatch, getState) => {
/*	if(getIsFetching(getState())) {
		return Promise.resolve();
	}
*/

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
/*	if(getIsFetching(getState())) {
		return Promise.resolve();
	}
*/

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

export const confirmMyAccount = (confUrl) => (dispatch, getState) => { /*	if(getIsFetching(getState())) {
		return Promise.resolve();
	}
*/

	dispatch({ type: 'NETWORK_REQUEST', isFetching: true });

	return confirmAccount(confUrl).then(
		response => {
			dispatch({
				type: 'CONFIRM_ACCOUNT_SUCCESS',
				isFetching: false,
				message: 'Thank you for confirming your account. Please login - redirecting to login page now.',
			});
		},
		error => {
			dispatch({
				type: 'API_FAILURE',
				isFetching: false,
				message: error.message || 'API Failure - Logout',
			});
		}
	);
};

export const fetchMyNotifications = () => (dispatch, getState) => { /*	if(getIsFetching(getState())) {
		return Promise.resolve();
	}
*/

	dispatch({ type: 'NETWORK_REQUEST', isFetching: true });

	return fetchNotifications().then(
		response => {
			dispatch({
				type: 'FETCH_NOTIFICATIONS_SUCCESS',
				isFetching: false,
				notObj: response,
			});
		},
		error => {
			dispatch({
				type: 'API_FAILURE',
				isFetching: false,
				message: error.message || 'API Failure - Logout',
			});
		}
	);
};

export const fetchMyFriends = () => (dispatch, getState) => { /*	if(getIsFetching(getState())) {
		return Promise.resolve();
	}
*/

	dispatch({ type: 'NETWORK_REQUEST', isFetching: true });

	return fetchFriends().then(
		response => {
			dispatch({
				type: 'FETCH_FRIENDS_SUCCESS',
				isFetching: false,
				friendObj: response,
			});
		},
		error => {
			dispatch({
				type: 'API_FAILURE',
				isFetching: false,
				message: error.message || 'API Failure - Logout',
			});
		}
	);
};

export const sendMyNotification = (notification_info) => (dispatch, getState) => {
/*	if(getIsFetching(getState())) {
		return Promise.resolve();
	}
*/

	dispatch({ type: 'NETWORK_REQUEST', isFetching: true });

	return sendNotification(notification_info).then(
		response => {
			dispatch({
				type: 'SEND_NOTIFICATION_SUCCESS',
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

export const addMyFriend = (addFriendObj) => (dispatch, getState) => { /*	if(getIsFetching(getState())) {
		return Promise.resolve();
	}
*/

	dispatch({ type: 'NETWORK_REQUEST', isFetching: true });

	return addFriend(addFriendObj).then(
		response => {
			dispatch({
				type: 'ADD_FRIEND_SUCCESS',
				isFetching: false,
				message: 'Friend added',
			});
		},
		error => {
			dispatch({
				type: 'API_FAILURE',
				isFetching: false,
				message: error.message || 'API Failure - Logout',
			});
		}
	);
};

export const rejectFriendRequest = (not_id) => (dispatch, getState) => {
/*	if(getIsFetching(getState())) {
		return Promise.resolve();
	}
*/

	dispatch({ type: 'NETWORK_REQUEST', isFetching: true });

	return rejectFriend(not_id).then(
		response => {
			dispatch({
				type: 'REJECT_FRIEND_REQUEST_SUCCESS',
				isFetching: false,
				message: 'Request deleted',
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

export const isRequested = (id_pkg) => (dispatch, getState) => {
/*	if(getIsFetching(getState())) {
		return Promise.resolve();
	}
*/

	dispatch({ type: 'NETWORK_REQUEST', isFetching: true });

	return alreadyRequested(id_pkg).then(
		response => {
			dispatch({
				type: 'ALREADY_REQUESTED_CHECK_SUCCESS',
				isFetching: false,
				message: 'Request deleted',
				alreadyRequested: response,
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
/*	if(getIsFetching(getState())) {
		return Promise.resolve();
	}
*/

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

export const fetchMyFriendsProfiles = () => (dispatch, getState) => {
/*	if(getIsFetching(getState())) {
		return Promise.resolve();
	}
*/

	dispatch({ type: 'NETWORK_REQUEST', isFetching: true });

	return fetchFriendsProfiles().then(
		response => {
			dispatch({
				type: 'FETCH_FRIENDS_PROFILES_SUCCESS',
				isFetching: false,
				message: 'Profiles received',
				myFriendsProfilesObj: response,
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
/*	if(getIsFetching(getState())) {
		return Promise.resolve();
	}
*/

	dispatch({ type: 'NETWORK_REQUEST', isFetching: true });

	return fetchMessages().then(
		response => {
			dispatch({
				type: 'FETCH_MESSAGES_SUCCESS',
				isFetching: false,
				message: 'Messages received',
				myMessages: response,
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

export const setNativeVisibility = (visNative) => {
	return { type: 'SET_NATIVE_VISIBILITY', visNative }
}

export const setLearningVisibility = (visLearning) => {
	return { type: 'SET_LEARNING_VISIBILITY', visLearning}
}

export const setGenderVisibility = (visGender) => {
	return { type: 'SET_GENDER_VISIBILITY', visGender }
}

export const setAlreadyRequested = () => {
	return { type: 'SET_ALREADY_REQUESTED', alreadyRequested: true }
}
