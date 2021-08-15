import React from 'react'
import {Route, Redirect} from 'react-router-dom'

export function PrivateRoute({component: Component, ...rest}) {
	return (
		<Route
			{...rest}
			render={props =>
				window.localStorage.getItem('token') ? (
					<Component {...props} />
				) : (
					<Redirect to='/login' />
				)
			}
		/>
	)
}
