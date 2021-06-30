import * as actions from '../types/cartTypes'

const INITIAL_STATE = {
	cart: [],
}

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actions.ITEM_ADDED:
			return {
				...state,
				cart: [...state.cart, action.payload],
			}

		default:
			return state
	}
}
export default cartReducer
