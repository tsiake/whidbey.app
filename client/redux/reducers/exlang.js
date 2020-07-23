import { combineReducers } from 'redux'

const apiReducer = (state = [], action) => {
	switch(action.type) {
		case 'NETWORK_REQUEST':
			return Object.assign({}, state, {
					isFetching: action.isFetching
			})
		case 'API_FAILURE':
			return Object.assign({}, state, {
					isFetching: action.isFetching,
					message: action.message
			})
		case 'FETCH_USERNAME_SUCCESS':
			return Object.assign({}, state, {
					username: action.username,
					isFetching: action.isFetching
			})
		case 'FETCH_COMMUNITY_SUCCESS':
			return Object.assign({}, state, {
					commObj: action.commObj,
					isFetching: action.isFetching
			})
		case 'LOGIN_USER_SUCCESS':
			return Object.assign({}, state, {
					username: action.username,
					isFetching: action.isFetching
			})
		case 'LOGOUT_USER_SUCCESS':
			return Object.assign({}, state, {
					username: action.username,
					profile: null,
					friendObj: null,
					notObj: null,
					isFetching: action.isFetching,
					message: action.message
			})
		case 'REGISTER_USER_SUCCESS':
			return Object.assign({}, state, {
					isFetching: action.isFetching,
					message: action.message
			})
		case 'FETCH_USER_DETAILS_SUCCESS':
			return Object.assign({}, state, {
					isFetching: action.isFetching,
					selectedUser: action.selectedUser,
					message: action.message
			})
		case 'FETCH_MY_DETAILS_SUCCESS':
			return Object.assign({}, state, {
					isFetching: action.isFetching,
					profile: action.profile,
					message: action.message
			})
		case 'UPDATE_PROFILE_SUCCESS':
			return Object.assign({}, state, {
					isFetching: action.isFetching,
					profile: action.profile,
					message: action.message
			})
		case 'FETCH_NOTIFICATIONS_SUCCESS':
			return Object.assign({}, state, {
					isFetching: action.isFetching,
					notObj: action.notObj,
			})
		case 'FETCH_FRIENDS_SUCCESS':
			return Object.assign({}, state, {
					isFetching: action.isFetching,
					friendObj: action.friendObj,
			})
		case 'ADD_FRIEND_SUCCESS':
			return Object.assign({}, state, {
					isFetching: action.isFetching,
					friendObj: action.friendObj,
			})
		case 'SEND_NOTIFICATION_SUCCESS':
			return Object.assign({}, state, {
					isFetching: action.isFetching,
					message: action.message,
			})
		case 'REJECT_FRIEND_REQUEST_SUCCESS':
			return Object.assign({}, state, {
					isFetching: action.isFetching,
					message: action.message,
			})
		case 'ALREADY_REQUESTED_CHECK_SUCCESS':
			return Object.assign({}, state, {
					isFetching: action.isFetching,
					message: action.message,
					alreadyRequested: action.alreadyRequested,
			})
		case 'SEND_MESSAGE_SUCCESS':
			return Object.assign({}, state, {
					isFetching: action.isFetching,
					message: action.message,
			})
		case 'FETCH_MESSAGES_SUCCESS':
			return Object.assign({}, state, {
					isFetching: action.isFetching,
					message: action.message,
					myMessages: action.myMessages,
			})
		case 'FETCH_FRIENDS_PROFILES_SUCCESS':
			return Object.assign({}, state, {
					isFetching: action.isFetching,
					message: action.message,
					myFriendsProfilesObj: action.myFriendsProfilesObj,
			})
		case 'SET_NATIVE_VISIBILITY':
			return Object.assign({}, state, {
				visNative: action.visNative
			})
		case 'SET_LEARNING_VISIBILITY':
			return Object.assign({}, state, {
				visLearning: action.visLearning
			})
		case 'SET_GENDER_VISIBILITY':
			return Object.assign({}, state, {
				visGender: action.visGender
			})
		case 'SET_ALREADY_REQUESTED':
			return Object.assign({}, state, {
				alreadyRequested: action.alreadyRequested
			})
		default: 
			return state
	}
}

const visibilityReducer = (state = [], action) => {
	switch(action.type) {
		case 'SET_NATIVE_VISIBILITY':
			return Object.assign({}, state, {
				visNative: action.visNative
			})
		case 'SET_LEARNING_VISIBILITY':
			return Object.assign({}, state, {
				visLearning: action.visLearning
			})
		case 'SET_GENDER_VISIBILITY':
			return Object.assign({}, state, {
				visGender: action.visGender
			})
	}
}

const inputReducer = (state = [], action) => {
	switch(action.type) {
		case 'EMAIL_INPUT':
			return Object.assign({}, state, {
					email_input: action.email_input
			})
		case 'PASSWORD_INPUT':
			return Object.assign({}, state, {
					password_input: action.password_input
			})
	}
}

export default apiReducer 
/*export default combineReducers({
	apiReducer,
	visibilityReducer
})*/

/*export const getIsFetching = (state) => state.isFetching
export const getMessage = (state) => state.message*/
