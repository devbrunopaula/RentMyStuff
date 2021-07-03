/* This example requires Tailwind CSS v2.0+ */
import React from 'react'
import {SparklesIcon} from '@heroicons/react/outline'
import {useLocation} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import * as actions from '../redux/actions/cartActions'

export default function ItemDetails() {
	const location = useLocation()
	const {item} = location.state
	const dispatch = useDispatch()

	const handleAddToCart = (items) => {
		const data = {
			...item,
			qty: 1,
		}
		dispatch(actions.addItemsCart(data))
		dispatch(actions.cartTotal())
	}
	return (
		<div className='relative bg-white mt-10 pb-32 overflow-hidden'>
			<div className='mt-24'>
				<div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
					<div className='px-4 max-w-xl mx-auto sm:px-6  lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2'>
						<div>
							<div>
								<span className='h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600'>
									<SparklesIcon
										className='h-6 w-6 text-white'
										aria-hidden='true'
									/>
								</span>
							</div>
							<div className='mt-6'>
								<h2 className='text-3xl font-extrabold tracking-tight text-gray-900'>
									{item.item_name}
								</h2>
								<p className='mt-4 text-lg text-gray-500'>
									{item.item_description}
								</p>
								<p className='mt-4'>Price ${item.price}</p>
								<div className='mt-6'>
									<button
										onClick={() => handleAddToCart(item)}
										className='inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700'
									>
										ADD TO CART
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className='mt-12 sm:mt-16 lg:mt-0 lg:col-start-1'>
						<div className='pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full'>
							<img
								className='w-auto h-auto'
								src={item.image_url}
								alt='Customer profile user interface'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
