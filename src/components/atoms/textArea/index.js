import React from 'react'

import styles from './style.module.css'

const TextArea = props => {
	const { value, placeholder } = props;
	return (
		<textarea 
			className={styles.textArea}
			value={value}
			placeholder={placeholder}
			{...props}></textarea>
	)
}

export default TextArea