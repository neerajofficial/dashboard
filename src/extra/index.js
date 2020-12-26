import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Navigation from './organisms/navigation'
import Homepage from './pages/home'
import Notes from './pages/notes'

const App = props => {
	return (
		<div className="grid">
			<Navigation />
			<Switch>
				<Route path="/home" component={Homepage} />
				<Route path="/notes" component={Notes} />
				<Redirect to="/home" />
			</Switch>
		</div>
	)
}

export default App