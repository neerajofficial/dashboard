import React from 'react'
import styles from './style.module.css'

import IconText from './../../molecules/iconText'
import dashboard from './../../../assets/icons/dashboard.svg'
import education from './../../../assets/icons/education.svg'
import setting from './../../../assets/icons/setting.svg'

const Navigation = props => {
	return (
		<div className={styles.navWrap}>
			<IconText
				divTheme="active"
				size="heading"
				theme="primary--light"
				value="Dashboard"
				url={dashboard} />
			<IconText
				size="heading"
				theme="primary--light"
				value="Lorem"
				url={education} />
			<IconText
				size="heading"
				theme="primary--light"
				value="Ispum"
				url={setting} />
		</div>
	)
}

export default Navigation