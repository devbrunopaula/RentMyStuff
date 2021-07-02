import * as actions from '../types/cartTypes'

const INITIAL_STATE = {
	cart: [],
	wishList: [],
	toggle: false,
	total: '',
}

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actions.ITEM_ADDED:
			return {
				...state,
				cart: [...state.cart, action.payload],
			}
		case actions.CART_ITEM_CHANGE:
			return {
				...state,

				cart: state.cart.filter((e) => {
					if (e.item_id === action.id) {
						e.qty = action.payload
						return e
					} else {
						return e
					}
				}),
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
		case actions.CART_TOTAL:
			return {
				...state,
				total: state.cart.map((e) => {
					return e.qty * e.price
				}),
			}
		case actions.CART_DETELE_ITEM:
			return {
				...state,
				cart: state.cart.filter((e) => e.item_id !== action.payload),
			}
		case actions.ADD_WISHLIST:
			return {
				...state,
				wishList: [...state.wishList, action.payload],
			}

		default:
			return state
	}
}
export default cartReducer
