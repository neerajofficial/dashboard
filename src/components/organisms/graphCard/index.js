import React from 'react'

import Icon from './../../atoms/icon'
import styles from './style.module.css'

const GraphCard = props => {
	const { src } = props;

	return (
		<div className={styles.graphCard} >
			<Icon 
				icon={src}
				iconsize="imageSmallBox"
				children="graph"/> 
		</div>
	)
}

export default GraphCard