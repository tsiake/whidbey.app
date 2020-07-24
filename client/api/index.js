// account api section

// POST API endpoint for the fetch username service
// relies on user cookies for retrieval
export const fetchUsername = () => {
  const baseUrl = '/api/session';
  return fetch(baseUrl, {
    method: "GET",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Cache': 'no-cache'
    },
    credentials: 'include'
  }).then(res => res.json())
}

// POST API endpoint for the login service
// expects a username (email) and password
export const loginAPI = (userInfo) => {
  const baseUrl = '/api/login';
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(userInfo)
  }).then(res => res.json());
}

// POST API endpoint for the register service
// expects a username (email) and password
export const registerAPI = (newUser) => {
  const baseUrl = '/api/register';
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  }).then(res => res.json())
}

// POST API endpoint for the logout service
export const logoutAPI = () => {
const baseUrl = '/api/logout';
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
  }).then(res => res.json());
}

// confirm account API
export const confirmAccount = (confUrl) => {
  const baseUrl = '/confirm';
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(confUrl)
  }).then(res => res.json())
}

//shops api section

// shops API - retrieves all shops
export const fetchShops = () => {
  const baseUrl = '/api/load_shops';
  return fetch(baseUrl, {
    method: "GET",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Cache': 'no-cache'
    },
    credentials: 'include'
  }).then(res => res.json())
}

// items API - retrieves a shop's items
export const fetchItems = (shop_id) => {
  const baseUrl = '/api/load_items';
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Cache': 'no-cache'
  },
  credentials: 'include'
  }).then(res => res.json())
}

// profile api section

// fetches user's profile
export const fetchMyProfile = () => {
  const baseUrl = '/api/profile_load';
  return fetch(baseUrl, {
    method: "GET",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Cache': 'no-cache'
    },
    credentials: 'include'
  }).then(res => res.json())
}

// edit user's profile API
export const editProfile = (profile_obj) => {
  const baseUrl = '/api/profile_edit';
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(profile_obj)
  }).then(res => res.json())
}


// notifications api section

// saves a notification to alert a user
export const createNotification = (notificationInfo) => {
  const baseUrl = '/api/create_notification';
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(notificationInfo)
  }).then(res => res.json());
}

// fetches user's notifications
export const fetchNotifications = () => {
  const baseUrl = '/api/notifications';
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Cache': 'no-cache'
    },
    credentials: 'include'
  }).then(res => res.json())
}

//messages api section

// saves a message from user to a shop - shop - to user
export const sendMessage = (msg_pkg) => {
  const baseUrl = '/api/send_message';
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Cache': 'no-cache'
    },
    credentials: 'include',
    body: JSON.stringify(msg_pkg)
  }).then(res => res.json())
}

// fetches all a user's messages
export const fetchMessages = () => {
  const baseUrl = '/api/get_messages';
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Cache': 'no-cache'
    },
    credentials: 'include'
  }).then(res => res.json())
}
