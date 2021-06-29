import {combineReducers} from 'redux'

import itemsReducer from './itermsReducer'
import userReducer from './userReducer'
import cartReducer from './cartReducer'
import itemReducer from './itermsReducer'

const rootReducer = combineReducers({
	products: itemsReducer,
	user: userReducer,
	cart: cartReducer,
	items: itemReducer,
})

export default rootReducer
