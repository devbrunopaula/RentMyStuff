import * as actions from '../types/userTypes'

const INITIAL_STATE = {
	user: null,
	isOwner: '',
	token: null,
	loading: false,
	auth: false,
	error: ' ',
}

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actions.LOGIN_LOADING:
			return {
				...state,
				loading: true,
			}
		case actions.LOGGED_IN:
			return {
				...state,
				user: action.payload.message,
				token: action.payload.token,
				auth: action.payload.token ? true : false,
			}

		case actions.LOGIN_ERROR:
			return {
				...state,
				error: action.payload,
				loading: true,
			}

		default:
			return state
	}
}

export default reducer
