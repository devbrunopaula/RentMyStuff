import * as actions from '../types/itemsTypes'
import axios from 'axios'

export const getItems = () => {
	return async (dispatch) => {
		dispatch({type: actions.FETCHING_ITEMS})
		try {
			const result = await axios(
				'https://usemytechstuff3.herokuapp.com/api/products'
			)

			dispatch({
				type: actions.FETCH_ITEMS_COMPLETED,
				payload: result.data,
			})
		} catch (error) {
			console.log('error')
			dispatch({
				type: actions.FETCH_ITEMS_ERROR,
				payload: error.message,
			})
		}
	}
}
