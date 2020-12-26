import React from 'react'

import Icon from './../../atoms/icon'
import Input from './../../atoms/input'
import styles from './style.module.css'

const IconInput = props => {
	const { icon, placeholder, iconsize } = props;
	
	return (
		<div className={styles.iconInput}>
			<div>
				<Icon
					children={placeholder} 
					iconsize={iconsize}
					icon={icon}
					/>
			</div>
			<div>
				<Input
					type="text"
					{...props} />
			</div>
		</div>
	)
}

export default IconInput