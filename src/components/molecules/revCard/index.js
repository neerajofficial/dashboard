import React from 'react'

import Text from './../../atoms/text'
import styles from './style.module.css'

const RevCard = props => {
	const { color } = props;

	return (
		<div className={styles.revCard}>
			<div 
				className={styles.imgBox} 
				style={{background: color}}>
					&nbsp;
			</div>
			<div className={styles.bodyBox}>
				<div className={styles.name}>
					<Text
						size="normal"
						theme="heading--grey">
							Admin
					</Text> 
				</div>
				<div className={styles.text}>
					<Text
						size="normal2"
						theme="heading--grey">
							Your faculty uploaded the syllabus.
					</Text> 
				</div>
				<div className={styles.time}>
					<Text
						size="small"
						theme="heading--grey">
							3 minutes ago
					</Text> 
				</div>
			</div>
		</div>
	)
}

export default RevCard