import React, { useState } from 'react'

import add from './../../../assets/icons/add.svg'
import search from './../../../assets/icons/search.svg'
import chart2 from './../../../assets/icons/chart2.svg'
import CardList from './../../molecules/cardList'
import IconInput from './../../molecules/iconInput'
import GraphCard from './../../organisms/graphCard'
import NoteCard from './../../organisms/noteCard'
import SalesCard from './../../organisms/salesCard'
import styles from './style.module.css'

const colorBoxData = [
	{
		id: 1, 
		head:"$1,204.33", 
		body: "Revenue",
		color: "yellow",
		theme: "primary" 
	},
	{
		id: 2,
		head:"33", 
		body: "Quotations",
		color: "green",
		theme: "primary" 
	}
]

const list = [...Array(5)]
	.map((e, i) => (
		<CardList
			key={i}
			head="Title"
			body="Lorem ipsum dolor sit am..."
			hSize="small"
			bSize="small" />
	));

const Home = props => {
	const [value, setVal] = useState('')

	const clickedAction = () => {
		props.history.push('/notes');
	}

	const changed = e => {
		const val = e.target.value;
		setVal(val);
	}

	return (
		<div className={styles.home}>
			<section className={styles.main}>
				<div className={styles.search}>
					<IconInput
						icon={search}
						iconsize="small"
						placeholder="Search"
						onChange={e => changed(e, value)}
						value={value} />
				</div>
				<div className={styles.sales}>
					<SalesCard
						colorBoxData={colorBoxData}
						head1="Sales Report"
						head2="17 Sep"
						hSize="bold"
						subSize="medium"
						subhead1="September 2020"
						subTheme="primary"
						theme="light"
						type="grid-2" />
				</div>
				<div className={styles.notepad}>
					<NoteCard
						heading="Notepad"
						list={list}
						icon={add}
						clicked={clickedAction} />
				</div>
				<div className={styles.graphs}>
					<GraphCard src={chart2} />
				</div>
				<div className={styles.profit}>
					profit
				</div>
				<div className={styles.loss}>
					loss
				</div>
				<div className={styles.inbox}>
					inbox
				</div>
			</section>
			<section className={styles.side}>
				Notifications
			</section>
		</div>
	)
}

export default Home