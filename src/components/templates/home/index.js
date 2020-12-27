import React, { useState } from 'react'

import styles from './style.module.css'

import add from './../../../assets/icons/add.svg'
import chart2 from './../../../assets/icons/chart2.svg'
import graph from './../../../assets/icons/path.svg'
import search from './../../../assets/icons/search.svg'

import Inbox from './../../molecules/inbox'
import GraphCard from './../../organisms/graphCard'
import MonthCard from './../../organisms/monthCard'
import NoteCard from './../../organisms/noteCard'
import Notifications from './../../organisms/notification'
import Popup from './../../organisms/popup'
import SalesCard from './../../organisms/salesCard'
import SearchBox from './../../molecules/searchBox'

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

const dataList = [
	{
		id: 1,
		text: 'Lorem ipsum dolor sit am...'
	},
	{
		id: 2,
		text: 'Lorem ipsum dolor sit am...'
	}
]

const Home = props => {
	const [value, setVal] = useState('')
	const [note, setNote] = useState('')

	const [popup, setpop] = useState(false);

	const clickedAction = () => {
		setpop(!popup);
	}

	const changed = e => {
		const val = e.target.value;
		setVal(val);
	}

	const notechanged = e => {
		const val = e.target.value;
		setNote(val);
	}

	const clicked = () => {
		dataList.push({ id: Math.random(), text: note})
		setNote('')
		clickedAction();
	}

	return (
		<div className={styles.home}>
				<div className={styles.search}>
					<SearchBox
						placeholder="Search" 
						iconsize="small"
						icon={search}
						onChange={e => changed(e, value)}
						value={value} />
				</div>
				<div className={styles.sales}>
					<SalesCard
						colorBoxData={colorBoxData} />
				</div>
				<div className={styles.notepad}>
					<NoteCard
						heading="Notepad"
						list={dataList}
						icon={add}
						clicked={clickedAction} />
					{
						popup 
						? <div className={styles.popup}>
							<Popup
								add={add}
								value={note}
								onChange={e => notechanged(e, value)}
								clickedadd={clicked} />
						</div>
						: null
					}
				</div>
				<div className={styles.graphs}>
					<GraphCard src={chart2} />
				</div>
				<div className={styles.inbox}>
					<Inbox text="Inbox" number="22" />
				</div>
				<div className={styles.thisMonth}>
					<MonthCard 
						heading="This Month" 
						percent="+78%"
						src={graph} />
				</div>
				<div className={styles.lastMonth}>
					<MonthCard 
						heading="Last Month" 
						percent="+64.7%"
						src={graph} />
				</div>
				<div className={styles.notifications}>
					<Notifications />
				</div>
			
		</div>
	);
}

export default Home