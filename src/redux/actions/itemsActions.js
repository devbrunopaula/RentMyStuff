import {ITEMS, ADD_ITEMS} from '../types/itemsTypes'
import axios from axios



export const getItems = () => {
return 
} 

export const increaseCounter = () => {
	return {
		type: ITEMS,
	}
}

export const decreaseCounter = () => {
	return {
		type: ADD_ITEMS,
	}
}
