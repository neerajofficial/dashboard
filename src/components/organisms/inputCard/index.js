import React from 'react'

import arrowdown from './../../../assets/icons/arrowdown.svg'
import file from './../../../assets/icons/file.svg'
import Icon from './../../atoms/icon'
import TextArea from './../../atoms/textArea'
import styles from './style.module.css'


const InputCard = props => {
	const { value, changed, clicked, cancelled } = props;

	return (
		<div className={styles.inputCard}>
			<div className={styles.textArea}>
				<TextArea
					value={value}
					onChange={e => changed(e, value)}
					placeholder="Share something with your class.."	/>
			</div>
			<div className={styles.actions}>
				<div className={styles.cancel}>
					<div 
						className={styles.text}
						onClick={cancelled}>
						Cancel
					</div>
				</div>
				<div className={styles.approved}>
					<div className={styles.file}>
						<Icon 
							icon={file} 
							iconsize="small" />
					</div>
					<div 
						className={styles.send} 
						onClick={clicked}>
						<div className={styles.text}>
							Share
						</div>
						<div className={styles.icon}>
							<Icon 
								icon={arrowdown} 
								iconsize="small" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default InputCard