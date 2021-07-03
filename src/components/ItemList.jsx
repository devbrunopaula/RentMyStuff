import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import * as actions from '../redux/actions/cartActions'
import {CurrencyDollarIcon, ShoppingCartIcon} from '@heroicons/react/solid'
import {Link} from 'react-router-dom'

export default function ItemList({items}) {
	const {cart, wishList} = useSelector((state) => ({
		cart: state.cart.cart,
		wishList: state.cart.wishList,
	}))
	const dispatch = useDispatch()

	const addITem = (item) => {
		const data = {
			...item,
			qty: 1,
		}

		if (item.available) {
			for (const el of cart) {
				if (el.item_id === item.item_id) return
			}
			dispatch(actions.addItemsCart(data))
		} else {
			for (let wish of wishList) {
				if (wish.item_id === item.item_id) return
			}
			dispatch(actions.addToWishList(item))
		}

		dispatch(actions.cartTotal())
	}
	return (
		<ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-8'>
			{items.products &&
				items.products.map((item) => (
					<li
						key={item.item_id}
						className='col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200'
					>
						<Link
							to={{
								pathname: `/items/${item.item_id}`,
								search: `?sort=${item.item_name}`,

								state: {item},
							}}
						>
							<div className='flex-1 flex flex-col p-8'>
								<img
									className='w-auto h-32 flex-shrink-0 mx-auto bg-black full'
									src={item.image_url}
									alt=''
								/>
								<h3 className='mt-6 text-gray-900 text-sm font-medium'>
									{item.item_name}
								</h3>
								<dl className='mt-1 flex-grow flex flex-col justify-between'>
									<dd className='text-gray-500 text-sm'>
										{item.title}
									</dd>
									<dt className='sr-only'>kkkkk</dt>
									<dd className='mt-3'>
										<span
											className={`px-2 py-1 text-green-800 text-xs font-medium ${
												item.available
													? 'bg-green-100'
													: 'bg-red-100'
											} rounded-full`}
										>
											{item.available
												? 'Available'
												: 'Rented'}
										</span>
									</dd>
								</dl>
							</div>
						</Link>
						<div>
							<div className='-mt-px flex divide-x divide-gray-200'>
								<div className='w-0 flex-1 flex'>
									<span className='relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500'>
										<CurrencyDollarIcon
											className='w-5 h-5 text-gray-400'
											aria-hidden='true'
										/>
										<span className='ml-3'>
											{item.price}
										</span>
									</span>
								</div>
								<div className='-ml-px w-0 flex-1 flex'>
									<span
										href={'/'}
										className='relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500'
									>
										<ShoppingCartIcon
											className='w-5 h-5 text-gray-500'
											aria-hidden='true'
										/>
										<button
											className='ml-3'
											onClick={() => addITem(item)}
										>
											{item.available
												? 'Rent It'
												: 'Wish List'}
										</button>
									</span>
								</div>
							</div>
						</div>
					</li>
				))}
		</ul>
	)
}
