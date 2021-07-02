import React, {Fragment} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {XIcon, TrashIcon} from '@heroicons/react/outline'
// import {DotsVerticalIcon} from '@heroicons/react/solid'
import {useSelector, useDispatch} from 'react-redux'
import * as actions from '../redux/actions/cartActions'

const tabs = [
	{name: 'All', href: '#', current: true},
	{name: 'Wish List', href: '#', current: false},
	{name: 'Saved', href: '#', current: false},
]

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function SideCart() {
	const dispatch = useDispatch()

	const {open, items, cartTotal} = useSelector((state) => ({
		open: state.cart.toggle,
		items: state.cart.cart,
		cartTotal: state.cart.total,
	}))

	const onChange = (event, item) => {
		console.log(item)
		dispatch(actions.cartItemChange(item.item_id, event.target.value))
		dispatch(actions.cartTotal())
	}

	const getTotal = () => {
		let cartResult = 0
		if (cartTotal) {
			cartResult = cartTotal.reduce((acc, cur) => acc + cur, 0)
		} else {
			return cartResult
		}
		return cartResult.toFixed(2)
	}

	const deleteItem = (item_id) => {
		if (!item_id) return
		dispatch(actions.deleteItem(item_id))
		dispatch(actions.cartTotal())
	}

	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog
				as='div'
				static
				className='fixed inset-0 overflow-hidden'
				open={open}
				onClose={() => dispatch(actions.closeCart(false))}
			>
				<div className='absolute inset-0 overflow-hidden'>
					<Dialog.Overlay className='absolute inset-0' />

					<div className='fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16 '>
						<Transition.Child
							as={Fragment}
							enter='transform transition ease-in-out duration-500 sm:duration-700'
							enterFrom='translate-x-full'
							enterTo='translate-x-0'
							leave='transform transition ease-in-out duration-500 sm:duration-700'
							leaveFrom='translate-x-0'
							leaveTo='translate-x-full'
						>
							<div className='w-screen max-w-md'>
								<div className='h-full flex flex-col bg-white shadow-xl overflow-y-scroll'>
									<div className='p-6'>
										<div className='flex items-start justify-between'>
											<Dialog.Title className='text-lg font-medium text-gray-900'>
												{!items.length ? (
													<p>Your Cart is Empty!</p>
												) : (
													'Cart'
												)}
											</Dialog.Title>
											<div className='ml-3 h-7 flex items-center'>
												<button
													className='bg-white rounded-md text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500'
													onClick={() =>
														dispatch(
															actions.closeCart(
																false
															)
														)
													}
												>
													<span className='sr-only'>
														Close panel
													</span>
													<XIcon
														className='h-6 w-6'
														aria-hidden='true'
													/>
												</button>
											</div>
										</div>
									</div>
									<div className='border-b border-gray-200'>
										<div className='px-6'>
											<nav
												className='-mb-px flex space-x-6'
												x-descriptions='Tab component'
											>
												{tabs.map((tab) => (
													<a
														key={tab.name}
														href={tab.href}
														className={classNames(
															tab.current
																? 'border-indigo-500 text-indigo-600'
																: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
															'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm'
														)}
													>
														{tab.name}
													</a>
												))}
											</nav>
										</div>
									</div>
									<div className='flex-1  divide-y divide-gray-200 overflow-y-auto'>
										{items &&
											items.map((item) => (
												<div
													className='flex'
													key={item.item_id}
												>
													<input
														className='ml-2 w-14'
														type='number'
														min='0'
														value={item.qty}
														onChange={(e) =>
															onChange(e, item)
														}
													/>
													<div className='relative flex-1 w-auto py-6 px-5 flex items-center'>
														{/* <div
															className='absolute inset-0'
															aria-hidden='true'
														/> */}

														<div className=' flex-1 flex items-center min-w-0 relative'>
															<span className='flex-shrink-0 inline-block relative'>
																<img
																	className='h-10 w-10 rounded-full'
																	src={
																		item.image_url
																	}
																	alt=''
																/>
																<span
																	className={classNames(
																		item.available ===
																			'available'
																			? 'bg-green-400'
																			: 'bg-gray-300',
																		'absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white'
																	)}
																	aria-hidden='true'
																/>
															</span>
															<div className='ml-4 truncate flex flex-col flex-1'>
																<p className='text-sm font-medium text-gray-900 truncate'>
																	{
																		item.item_name
																	}
																</p>
																<p className='text-sm text-gray-500 truncate'>
																	{'$ ' +
																		item.price}
																</p>
															</div>
														</div>
														{/* </a> */}

														<div className='ml-2'>
															<TrashIcon
																className='text-red-800 h-6 w-6'
																onClick={() =>
																	deleteItem(
																		item.item_id
																	)
																}
																aria-hidden='true'
															/>
														</div>
													</div>
												</div>
											))}
										<h3 className='pt-9 pr-4 flex justify-end text-lg text-gray-800'>
											{items.length > 0
												? `Total: $${getTotal()}`
												: ''}
										</h3>
									</div>
								</div>
							</div>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	)
}
