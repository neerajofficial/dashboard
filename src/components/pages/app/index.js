import React from 'react'

import { RouteData, NavData } from './data'
import Navigation from './../../organisms/navigation'
import Routes from './../../../routes'
import styles from './style.module.css'

const App = () => {
	return (
		<div className={styles.app}>
			<section>
				<Navigation data={NavData} />
			</section>
			<section>
				<Routes data={RouteData} />
			</section>
		</div>
	)
}

export default App
