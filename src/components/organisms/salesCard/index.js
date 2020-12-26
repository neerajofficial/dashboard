import React from 'react'

import icon from './../../../assets/icons/chart.svg'
// import CardList from './../../molecules/cardList'
import ColorBox from './../../molecules/colorBox'
import Icon from './../../atoms/icon'
import Text from './../../atoms/text'
import styles from './style.module.css'

const SalesCard = props => {
	const { colorBoxData } = props;
	
	return (
		<div className={styles.salesCard}>
			<div className={styles.graph}>
				<div className={styles.heading}>
					<Text
						size="bold"
						theme="heading--brown" >
						Sales Report
					</Text>
					<Text
						size="medium"
						theme="heading--grey" >
					 	September 2020
					</Text>
				</div>
				<div className={styles.image}>
					<Icon 
						iconsize="imageBox"
						icon={icon} />
				</div>
			</div>
			<div className={styles.cards}>
				<div className={styles.heading}>
					<Text
						size="large"
						theme="heading--white" >
					 	Sep 17
					</Text>
				</div>
				<div className={styles.colorBox}>
				{
					colorBoxData && colorBoxData.map(e => (
						<div key={e.id}>
							<ColorBox
								head={e.head}
								body={e.body}
								color={e.color}
								theme={e.theme} />
						</div>
					))
				}
				</div>
			</div>	
		</div>
	)
}

export default SalesCard