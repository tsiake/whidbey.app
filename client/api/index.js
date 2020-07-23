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
		})
		.then(res => res.json())
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

export const fetchCommunity = () => {
	const baseUrl = '/api/community_load';
	return fetch(baseUrl, {
			method: "GET",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Cache': 'no-cache'
			},
			credentials: 'include'
		})
		.then(res => res.json())
}

export const fetchUserProfile = (user_id) => {
	const baseUrl = '/api/user_profile';
	console.log("API LOG: " + user_id);
	return fetch(baseUrl, {
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Cache': 'no-cache'
			},
			credentials: 'include',
			body: JSON.stringify(user_id)
		})
		.then(res => res.json())
}

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
		})
		.then(res => res.json())
}

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

export const sendNotification = (notificationInfo) => {
	const baseUrl = '/api/send_notification';
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

export const fetchNotifications= () => {
	const baseUrl = '/api/notifications';
	return fetch(baseUrl, {
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Cache': 'no-cache'
			},
			credentials: 'include'
		})
		.then(res => res.json())
}

export const fetchFriends = () => {
	const baseUrl = '/api/is_friend';
	return fetch(baseUrl, {
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Cache': 'no-cache'
			},
			credentials: 'include'
		})
		.then(res => res.json())
}

export const addFriend = (addFriendObj) => {
	const baseUrl = '/api/add_friend';
	return fetch(baseUrl, {
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Cache': 'no-cache'
			},
			credentials: 'include',
			body: JSON.stringify(addFriendObj)
		})
		.then(res => res.json())
}

export const rejectFriend = (not_id) => {
	const baseUrl = '/api/reject_friend';
	return fetch(baseUrl, {
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Cache': 'no-cache'
			},
			credentials: 'include',
			body: JSON.stringify(not_id)
		})
		.then(res => res.json())
}

export const alreadyRequested = (id_pkg) => {
	const baseUrl = '/api/is_requested';
	return fetch(baseUrl, {
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Cache': 'no-cache'
			},
			credentials: 'include',
			body: JSON.stringify(id_pkg)
		})
		.then(res => res.json())
}

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
		})
		.then(res => res.json())
}

export const fetchFriendsProfiles = () => {
	const baseUrl = '/api/get_friend_profiles';
	return fetch(baseUrl, {
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Cache': 'no-cache'
			},
			credentials: 'include'
		})
		.then(res => res.json())
}

export const fetchMessages= () => {
	const baseUrl = '/api/get_messages';
	return fetch(baseUrl, {
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Cache': 'no-cache'
			},
			credentials: 'include'
		})
		.then(res => res.json())
}
