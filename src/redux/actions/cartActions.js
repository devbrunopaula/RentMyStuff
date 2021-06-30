import * as actions from '../types/cartTypes'

export const addItemsCart = (payload) => {
	return {
		type: actions.ITEM_ADDED,
		payload,
	}
}
