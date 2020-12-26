import React from 'react'

import styles from './style.module.css'

const Icon = props => {
	const { children, icon, iconsize } = props;

	const classProps = [styles.icon, styles[iconsize]].join(' ');

	return (
		<div className={classProps} {...props}>
			<img src={icon} alt={children} />
		</div>
	)
}

export default Icon