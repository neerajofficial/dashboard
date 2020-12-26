import React from 'react'

import styles from './style.module.css'

const Text = props => {
	const { children, theme, size } = props;

	const classProps = [styles.text, styles[theme], styles[size]].join(' ');
	
	return (
		<div className={classProps}>
			{children}
		</div>
	)
}

export default Text