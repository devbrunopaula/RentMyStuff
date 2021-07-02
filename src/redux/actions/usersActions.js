import * as actions from '../types/userTypes'
import axios from 'axios'

export const loggedIn = (payload) => {
	window.localStorage.removeItem('token')
	return async (disaptch) => {
		disaptch({type: actions.LOGIN_LOADING, payload: true})
		try {
			const res = await axios.post(
				`https://usemytechstuff3.herokuapp.com/auth/login`,
				payload
			)
			window.localStorage.setItem('token', res.data.token)

			disaptch({type: actions.LOGGED_IN, payload: res.data})
			disaptch({type: actions.LOGIN_LOADING, payload: false})
		} catch (error) {
			disaptch({
				type: actions.LOGIN_ERROR,
				payload: error.message,
			})
		}
	}
}

export const loginTyping = () => {
	return {
		type: actions.LOGGIN_TYPING,
	}
}
