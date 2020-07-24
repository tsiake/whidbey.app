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
    case 'FETCH_SHOP_SUCCESS':
      return Object.assign({}, state, {
        shopsArray: action.shopsArray,
        isFetching: action.isFetching
      })
    case 'FETCH_ITEM_SUCCESS':
      return Object.assign({}, state, {
        itemsArray: action.itemsArray,
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
        notArray: null,
        myMessagesArray: null,
        isFetching: action.isFetching,
        message: action.message
      })
    case 'REGISTER_USER_SUCCESS':
      return Object.assign({}, state, {
        isFetching: action.isFetching,
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
        notArray: action.notArray,
      })
    case 'CREATE_NOTIFICATION_SUCCESS':
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        message: action.message,
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
        myMessagesArray: action.myMessagesArray,
      })
    default: 
      return state
  }
}

export default apiReducer 

/*export default combineReducers({
apiReducer,
visibilityReducer
})*/

/*export const getIsFetching = (state) => state.isFetching
export const getMessage = (state) => state.message*/