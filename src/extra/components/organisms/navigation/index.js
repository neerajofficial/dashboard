import React from 'react'

import IconText from './../../molecules/iconText'
import styles from './style.module.css'

const Navigation = props => {
	const { data } = props;
	return (
		<div className={styles.navigation}>
			{
				data.map(e => (
					<IconText
						key={e.id}
						icon={e.icon}
						iconsize={e.iconsize}
						theme={e.theme} >
							{e.name}
					</IconText>
				))
			}
		</div>
	)
}

export default Navigation