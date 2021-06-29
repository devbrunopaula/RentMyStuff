import React from 'react'
import {Route, Redirect} from 'react-router-dom'

export function PrivateRoute({component: Component, ...rest}) {
	console.log(!window.localStorage.getItem('token') === null)
	return (
		<Route
			{...rest}
			render={(props) =>
				window.localStorage.getItem('token') ? (
					<Component {...props} />
				) : (
					<Redirect to='/' />
				)
			}
		/>
	)
}
