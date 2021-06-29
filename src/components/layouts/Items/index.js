import React from 'react'
import Headers from './Header'
import Footer from './Footer'

function ItemsLayout({children}) {
	return (
		<div>
			<Headers />
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				{children}
			</div>

			<Footer />
		</div>
	)
}

export default ItemsLayout
