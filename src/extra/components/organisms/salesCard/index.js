import React from 'react'

import icon from './../../../assets/icons/chart.svg'
import CardList from './../../molecules/cardList'
import ColorBox from './../../molecules/colorBox'
import Icon from './../../atoms/icon'
import Text from './../../atoms/text'
import styles from './style.module.css'

const SalesCard = props => {
	const {  
		type, theme, hSize, subSize,
		head1, subhead1, subTheme, head2, colorBoxData 
	} = props;

	const classProps = [styles.salesCard, styles[type]].join(' ');

	return (
		<div className={classProps}>
			<div className={styles[theme]}>
				<div className={styles.heading}>
					<CardList
						head={head1}
						body={subhead1}
						hSize={hSize}
						bSize={subSize} />
				</div>
				<div className={styles.body}>
					<Icon
						iconsize="imageBox"
						icon={icon} />
				</div>
			</div>

			<div className={styles[subTheme]}>
				<div>
					<Text
						size={hSize}
						theme="heading--white" >
						{head2}
					</Text>
				</div>
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
	)
}

export default SalesCard