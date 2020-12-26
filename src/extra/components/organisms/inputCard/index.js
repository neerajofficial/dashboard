import React from 'react'

import styles from './style.module.css'


const InputCard = props => {
	return (
		<div className={styles.inputCard}>
			<div className={styles.textArea}>
				Text area
			</div>
			<div className={styles.cancel}>
				Cancel
			</div>
			<div className={styles.file}>
				File
			</div>
			<div className={styles.send}>
				Share Button
			</div>
		</div>
	)
}

export default InputCard