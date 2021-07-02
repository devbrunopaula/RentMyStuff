import * as actions from '../types/cartTypes'

export const addItemsCart = (payload) => {
	return {
		type: actions.ITEM_ADDED,
		payload,
	}
}

export const toggleCart = () => {
	return {
		type: actions.CART_TOGGLE,
	}
}
export const cartItemChange = (id, payload) => {
	return {
		type: actions.CART_ITEM_CHANGE,
		id,
		payload,
	}
}

export const closeCart = (payload) => {
	return {
		type: actions.CART_CLOSED,
		payload,
	}
}

export const openCart = (payload) => {
	return {
		type: actions.CART_OPEN,
		payload,
	}
}
