import React from 'react'
import Headers from './Header'
import Footer from './Footer'
import '../../../styles/loading.css'
import loaderImage from '../../../assets/images/loader.gif'
import {useSelector} from 'react-redux'
import SideCart from '../../sideCart'
function ItemsLayout({children}) {
	const state = useSelector((state) => state.items)

	return (
		<div>
			<Headers />
			<img
				className={state.loading ? 'loading' : 'hidden'}
				alt='loader'
				src={loaderImage}
			/>
			<SideCart />
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				{children}
			</div>

			<Footer />
		</div>
	)
}

export default ItemsLayout
