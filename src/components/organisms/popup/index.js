import React from 'react'

import Input from './../../atoms/input'
import Icon from './../../atoms/icon'
import styles from './style.module.css'

const Popup = props => {
	const { clickedadd, add, ...otherprops } = props;
	return (
		<div className={styles.popup}>
			<Input 
				type="text"
				placeholder="Enter note"
				{...otherprops} />
			<div className={styles.add}>
				<Icon 
					icon={add}
					iconsize="small"
					alt="add"
					onClick={clickedadd} />
			</div>
		</div>
	)
}

export default Popup