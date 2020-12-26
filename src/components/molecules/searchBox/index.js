import React from 'react'

import Icon from './../../atoms/icon'
import Input from './../../atoms/input'
import styles from './style.module.css'

const SearchBox = props => {
	const { placeholder, iconsize, icon } = props;
	return (
		<div className={styles.searchBox}>
			<div>
				<Icon
					alt={placeholder}
					iconsize={iconsize}
					icon={icon} />
			</div>
			<div className={styles.input}>
				<Input
					type="text"
					{...props} />
			</div>
		</div>
	)
}

export default SearchBox