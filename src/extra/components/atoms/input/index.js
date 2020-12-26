import React from 'react'

import styles from './style.module.css'

const Input = props => {
	const { type, value, placeholder } = props;
	return (
		<input 
			type={type} 
			placeholder={placeholder}
			value={value} 
			className={styles.input}
			{...props} />
	)
}

export default Input