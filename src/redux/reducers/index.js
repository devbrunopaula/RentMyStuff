import {combineReducers} from 'redux'

import itemsReducer from './itermsReducer'
import userReducer from './userReducer'
import cartReducer from './cartReducer'

const rootReducer = combineReducers({
	products: itemsReducer,
	user: userReducer,
	cart: cartReducer,
})

export default rootReducer
