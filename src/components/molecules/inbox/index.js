import React from 'react'

import Text from './../../atoms/text'
import styles from './style.module.css'

const Inbox = props => {
	const {text, number} = props;

	return (
		<div className={styles.inbox}>
			<div>
				<Text
					size="small"
					theme="heading--brown">
						{text}
				</Text>
			</div>
			<div>
				<Text
					size="bold"
					theme="heading--brown">
						{number}
				</Text>
			</div>
		</div>	
	)
}

export default Inbox