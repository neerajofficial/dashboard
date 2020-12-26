import React from 'react'
import styles from './style.module.css'

const Input = props => {
	const { text, icon, value, type, changed } = props;
	return (
		<input 
			type={type} 
			value={value} 
			onChange={e => changed(e, value)}
			className={styles.input}
			placeholder={text}
			{...props} />
	)
}

export default Input