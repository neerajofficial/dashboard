import React from 'react'

import RevCard from './../../molecules/revCard'
import Text from './../../atoms/text'
import styles from './style.module.css'

const Notifications = props => {
	return (
		<div className={styles.notifications}>
			<div className={styles.heading}>
				<div className={styles.active}>
					<Text
						size="medium"
						theme="heading--dark">
						Notifications
					</Text> 
				</div>
				<div>
					<Text
						size="medium"
						theme="heading--grey">
						Events
					</Text> 
				</div>
			</div>
			<div className={styles.body}>
				<div className={styles.innerCard}>
					<RevCard color="#BA99FF"/>
					<RevCard color="#FFD9D9"/>
					<RevCard color="#B0B0B0"/>
					<RevCard color="#FFE700"/>
					
				</div>
				<div className={styles.viewAll}>
					<Text
						size="small"
						theme="heading--grey">
						View All
					</Text> 
				</div>
			</div>

		</div>
	)
}

export default Notifications