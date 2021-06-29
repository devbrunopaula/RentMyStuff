import * as actions from '../types/itemsTypes'

const INITIAL_STATE = {
	products: [],
	loading: false,
	error: '',
}

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actions.FETCHING_LOADING:
			return {
				loading: action.payload,
			}
		case actions.FETCH_ITEMS_COMPLETED:
			return {
				...state,
				products: action.payload,
			}
		case actions.FETCH_ITEMS_ERROR:
			return {
				error: action.payload,
			}
		default:
			return state
	}
}

export default reducer
