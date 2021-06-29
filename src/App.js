import React from 'react'
import {Switch, Route} from 'react-router-dom'
import DashboardLayout from './components/layouts/dashboard'
import Dashboard from './pages/dashboard'
import Items from './pages/index'
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
				<Items />
			</Route>
			{/* <PrivateRoute
				exact
				path='/dashboard'
				component={
					<DashboardLayout>
						<Dashboard />
					</DashboardLayout>
				}
			/> */}
			<DashboardLayout>
				<PrivateRoute exact path='/dashboard' component={Dashboard} />
			</DashboardLayout>
		</Switch>
	)
}

export default App
