import React from 'react'

import Text from './../../atoms/text'
import styles from './style.module.css'

const CardList = props => {
	const { head, body, hSize, bSize } = props;

	return (
		<div className={styles.cardList}>
			<div>
				<Text 
					size={hSize}
					theme="heading--brown" >
						{head}
				</Text>
			</div>
			<div>
				<Text
					size={bSize}
					theme="heading--grey" >
						{body}
					</Text>
			</div>
		</div>
	)
}

export default CardList