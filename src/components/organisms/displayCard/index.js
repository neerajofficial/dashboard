import React from 'react'

import send from './../../../assets/icons/send.svg'
import profile from './../../../assets/icons/profile.png'
import Icon from './../../atoms/icon'
import Text from './../../atoms/text'
import Input from './../../atoms/input'
import styles from './style.module.css'

const DisplayCard = props => {
	const { comment, text } = props;

	return (
	<div className={styles.displayCard}>
		<div className={styles.display}>
			<div>
				<Icon icon={profile} iconsize="imageSmall" alt="profile" />
			</div>
			<div className={styles.content}>
				<div className={styles.top}>
					<div>
						<Text
							size="normal"
							theme="heading--brown">
								Teacher
						</Text> 
					</div>
					<div>
						<Text
							size="small"
							theme="heading--grey">
								12:40 pm
						</Text> 
					</div>
				</div>
				<div className={styles.body}>
					<Text
						size="normal2"
						theme="heading--grey">
							{text}
					</Text> 
				</div>
			</div>
		</div>
		{
			comment 
			? <div className={styles.comment}>
				<div className={styles.image}>
					<Icon icon={profile} iconsize="imageSmall2" alt="profile" />
				</div>	
				<div className={styles.body}>
					<Input
						placeholder="|Write a comment.." />
				</div>
				<div className={styles.send}>
					<Icon 
						icon={send} 
						iconsize="small" />
				</div>
			</div>
			: null
		}
	</div>
	)
}

export default DisplayCard