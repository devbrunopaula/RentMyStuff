import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import * as Items from '../redux/actions/itemsActions'
import ItemList from '../components/ItemList'

export default function index() {
	const state = useSelector((state) => state.items)
	const dispatch = useDispatch()

	console.log('state', state)

	useEffect(() => {
		dispatch(Items.getItems())
	}, [])
	return (
		<div>
			<ItemList items={state} />
		</div>
	)
}
