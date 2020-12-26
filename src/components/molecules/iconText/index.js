import React from 'react'

import Icon from './../../atoms/icon'
import Text from './../../atoms/text'
import styles from './style.module.css'

const IconText = props => {
	const { children, icon, iconsize, theme } = props;

	const classProps = [styles.iconText, styles[theme]].join(' ');

	return (
		<div className={classProps}>
			<div className={styles.icon}>
				<Icon icon={icon} iconsize={iconsize}>
					{children}
				</Icon>
			</div>
			<div>
				<Text>
					{children}
				</Text>
			</div>
		</div>
	)
}

export default IconText