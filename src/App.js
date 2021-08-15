import React from 'react'
import {Switch, Route} from 'react-router-dom'
import DashboardLayout from './components/layouts/dashboard'
import ItemLayout from './components/layouts/Items'
import Dashboard from './pages/dashboard'
import Items from './pages'
import Login from './pages/login'
import {PrivateRoute} from './components/privateRoute'
import ItemDetails from './pages/itemDetails'
import Home from './pages/home'

function App() {
	return (
		<Switch>
			<Route exact path='/'>
				<Home />
			</Route>
			<Route path='/login'>
				<Login />
			</Route>
			<Route exact path='/items/:id'>
				<ItemLayout>
					<ItemDetails />
				</ItemLayout>
			</Route>
			<Route exact path='/items'>
				<ItemLayout>
					<PrivateRoute exact path='/items' component={Items} />
				</ItemLayout>
			</Route>

			<DashboardLayout>
				<PrivateRoute exact path='/dashboard' component={Dashboard} />
			</DashboardLayout>
		</Switch>
	)
}

export default App
