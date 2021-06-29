import React from 'react'
import {
	CurrencyBangladeshiIcon,
	CurrencyDollarIcon,
	ShoppingCartIcon,
	PhoneIcon,
} from '@heroicons/react/solid'

export default function ItemList({items}) {
	console.log(items.products)
	return (
		<ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-8'>
			{items.products &&
				items.products.map((person) => (
					<li
						key={person.item_id}
						className='col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200'
					>
						<div className='flex-1 flex flex-col p-8'>
							<img
								className='w-auto h-32 flex-shrink-0 mx-auto bg-black full'
								src={person.image_url}
								alt=''
							/>
							<h3 className='mt-6 text-gray-900 text-sm font-medium'>
								{person.item_name}
							</h3>
							<dl className='mt-1 flex-grow flex flex-col justify-between'>
								<dd className='text-gray-500 text-sm'>
									{person.title}
								</dd>
								<dt className='sr-only'>kkkkk</dt>
								<dd className='mt-3'>
									<span
										className={`px-2 py-1 text-green-800 text-xs font-medium ${
											person.available
												? 'bg-green-100'
												: 'bg-red-100'
										} rounded-full`}
									>
										{person.available
											? 'Available'
											: 'Rented'}
									</span>
								</dd>
							</dl>
						</div>
						<div>
							<div className='-mt-px flex divide-x divide-gray-200'>
								<div className='w-0 flex-1 flex'>
									<a
										href={`mailto:${person.price}`}
										className='relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500'
									>
										<CurrencyDollarIcon
											className='w-5 h-5 text-gray-400'
											aria-hidden='true'
										/>
										<span className='ml-3'>
											{person.price}
										</span>
									</a>
								</div>
								<div className='-ml-px w-0 flex-1 flex'>
									<a
										href={`tel:${person.telephone}`}
										className='relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500'
									>
										<ShoppingCartIcon
											className='w-5 h-5 text-gray-400'
											aria-hidden='true'
										/>
										<span className='ml-3'>Rent It</span>
									</a>
								</div>
							</div>
						</div>
					</li>
				))}
		</ul>
	)
}
