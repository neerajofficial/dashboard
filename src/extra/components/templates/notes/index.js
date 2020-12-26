import React from 'react'

import InputCard from './../../organisms/inputCard' 
import styles from './style.module.css'

const Notes = props => {
	return (
		<div className={styles.notes}>
			<div className={styles.main}>
				<div className={styles.inputCard}>
					<InputCard />
				</div>
				<div className={styles.displayCard}>
					displayCard 
				</div>
			</div>
		</div>
	)
}

export default Notes