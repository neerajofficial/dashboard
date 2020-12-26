import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

const Routes = props => {
	const { data } = props;

	return (
	<React.Fragment>
		<Switch>
			{
				data.map(el => (
					<Route 
						key={el.id}
						path={el.path}
						component={el.component} />
				))
			}
			<Redirect to="/home" />
		</Switch>
	</React.Fragment>
	)
}

export default Routes