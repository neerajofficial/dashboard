import React from 'react'

import Text from './../../atoms/text'
import styles from './style.module.css'

const ColorBox = props => {
	const { head, body, color, theme} = props;
	const classProps = [styles[color], styles[theme]].join(' ');

	return (
		<div className={classProps}>
			<div>
				<Text
					size="normal"
					theme="heading--brown">
						{head}
				</Text>
			</div>
			<div>
				<Text
					size="small"
					theme="heading--brown">
						{body}
				</Text>
			</div>
		</div>
	)
}

export default ColorBox