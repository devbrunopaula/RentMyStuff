import * as actions from '../types/itemsTypes'

const INITIAL_STATE = {
	items: [],
	loading: false,
}

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actions.ITEMS:
			return {
				...state,
				// items: state.item + 1,
			}

		case actions.ADD_ITEMS:
			return {
				...state,
				// items: state.count - 1,
			}

		default:
			return state
	}
}

export default reducer
