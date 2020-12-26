import React from 'react'
import styles from './style.module.css'

const Icon = props => {
	const { url, alt } = props; 
	return (
		<div className={styles.imgWrap}>
			<img 
				src={url} 
				alt={alt} />
		</div>
	)
}

export default Icon