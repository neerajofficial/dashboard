import React from 'react'
import styles from './style.module.css'

import Input from './../../atoms/input'
import Icon from './../../atoms/icon'

const IconInput = props => {
	const { icon, text, value, type, clicked } = props;
	return (
		<div className={styles.iconInput}>
			<Icon
				url={icon}
				alt={text} />
			<Input  
				type={type}
				clicked={clicked}
				text={text}
				value={value}
				{...props} />
		</div>
	)
}

export default IconInput