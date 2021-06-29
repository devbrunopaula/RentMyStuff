import React from 'react'
import {Switch, Route} from 'react-router-dom'
import DashboardLayout from './components/layouts/dashboard'
import ItemLayout from './components/layouts/Items'
import Dashboard from './pages/dashboard'
import Items from './pages'
import Login from './pages/login'
import {PrivateRoute} from './components/privateRoute'
function App() {
	return (
		<Switch>
			<Route exact path='/'>
				Home
			</Route>
			<Route path='/login'>
				<Login />
			</Route>
			<Route path='/items'>
				<ItemLayout>
					<Items />
				</ItemLayout>
			</Route>

			<DashboardLayout>
				<PrivateRoute exact path='/dashboard' component={Dashboard} />
			</DashboardLayout>
		</Switch>
	)
}

export default App
