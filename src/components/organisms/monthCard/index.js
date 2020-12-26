import React from 'react'

import ImgInbox from './../../molecules/imgInbox'
import Text from './../../atoms/text'
import styles from './style.module.css'

const MonthCard = props => {
	const { heading, percent, src } = props;

	return (
		<div className={styles.monthCard}>
			<div className={styles.head}>
				<Text
					size="small"
					theme="heading--grey">
						{heading}
				</Text>
			</div>
			<div className={styles.body}>
				<ImgInbox
					text={percent} 
					src={src} />
			</div>
		</div>
	)
}

export default MonthCard