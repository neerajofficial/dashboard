import React from 'react'

import Icon from './../../atoms/icon'
import Text from './../../atoms/text'
import styles from './style.module.css'

const ImgInbox = props => {
	const {text, src} = props;

	return (
		<div className={styles.imgInbox}>
			<div>
				<Text
					size="large"
					theme="heading--blue">
						{text}
				</Text>
			</div>
			<div>
				<Icon
					icon={src}
					iconsize="imageSmallBox" />
			</div>
		</div>	
	)
}

export default ImgInbox