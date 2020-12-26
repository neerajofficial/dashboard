import React from 'react'

import Icon from './../../atoms/icon'
import CardList from './../../molecules/cardList'
import Text from './../../atoms/text'
import styles from './style.module.css'

const NoteCard = props => {
	const { heading, list, icon, clicked } = props;

	return (
		<div className={styles.noteCard}>
			<div className={styles.head}>
				<Text
					size="medium"
					theme="heading--brown">
						{heading}
				</Text>
			</div>
			<div className={styles.body}>
				<div>
					{
						list && list.map(i => (
							<CardList
								key={i.id}
								head="Title"
								body={i.text}
								hSize="small"
								bSize="small" />
						))
					}
				</div>
				<div className={styles.icon}>
					<Icon
						onClick={clicked} 
						children="add"
						iconsize="medium"
						icon={icon} />
				</div>
			</div>
		</div>
	)
}

export default NoteCard