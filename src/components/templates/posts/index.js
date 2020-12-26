import React, { useState } from 'react'

import DisplayCard from './../../organisms/displayCard'
import InputCard from './../../organisms/inputCard' 
import styles from './style.module.css'

const dData = [
	{
		id: 1,
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'
	}
]

const Posts = props => {
	const [value, setIdea] = useState('');

	const changed = e => {
		setIdea(e.target.value);
	}

	const clicked = e => {
		e.preventDefault();
		dData.push({ id: Math.random(), text: value });
		cancelled();
	}
	
	const cancelled = () => {
		setIdea('');
	}

	return (
		<div className={styles.posts}>
			<div className={styles.main}>
				<div className={styles.inputCard}>
						<InputCard
							value={value}
							changed={changed}
							clicked={clicked}
							cancelled={cancelled} />
					</div>
					<div className={styles.displayCard}>
						<DisplayCard 
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
							comment={true} />
						{
							dData.map(e => (
								<DisplayCard 
									key={e.id}
									text={e.text} />
							))
						} 
					</div>
			</div>
		</div>
	);
}

export default Posts