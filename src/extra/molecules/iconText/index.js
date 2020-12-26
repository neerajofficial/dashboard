import React from 'react'
import styles from './style.module.css'

import Icon from './../../atoms/icon'
import Text from './../../atoms/text'

const IconText = props => {
	const { divTheme, size, theme, value, url } = props;
	const classProps = [styles.iconTextWrap, styles[divTheme]].join(' ');

	return (
		<div className={classProps}>
			<Icon
				url={url}
				alt="icon text" />
			<Text 
				size={size}
				theme={theme}
				value= {value} />
		</div>
	)
}

export default IconText