import * as actions from '../types/cartTypes'

const INITIAL_STATE = {
	cart: [],
	toggle: false,
}

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actions.ITEM_ADDED:
			return {
				...state,
				cart: [...state.cart, action.payload],
			}
		case actions.CART_TOGGLE:
			return {
				...state,
				toggle: !state.toggle,
			}
		case actions.CART_CLOSED:
			return {
				...state,
				toggle: action.payload,
			}
		case actions.CART_OPEN:
			return {
				...state,
				toggle: action.payload,
			}

		default:
			return state
	}
}
export default cartReducer
