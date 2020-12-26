import React from 'react'
import { NavLink } from 'react-router-dom'

import IconText from './../../molecules/iconText'
import styles from './style.module.css'

const Navigation = props => {
	const { data } = props;
	return (
		<div className={styles.navigation}>
			{
				data.map(e => (
					<NavLink 
						key={e.id}
						to={e.path}
						className={styles.navLink}
						activeClassName={styles.active} >
						<IconText
							icon={e.icon}
							iconsize={e.iconsize}
							theme={e.theme} >
								{e.name}
						</IconText>
					</NavLink>
				))
			}
		</div>
	)
}

export default Navigation