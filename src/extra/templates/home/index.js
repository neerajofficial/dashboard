import React, { useState } from 'react'

import IconInput from './../../molecules/iconInput'
import search from './../../../assets/icons/search.svg'

const Home = () => {

	const [searchText, setValue] = useState('');

	const clicked = e => {
		const val = e.target.value;
		setValue(val);
	}

	return (
		<div>
			<IconInput
				type="text"
				changed={clicked}
				text="Search"
				icon={search}
				value={searchText} />
		</div>
	)
}

export default Home