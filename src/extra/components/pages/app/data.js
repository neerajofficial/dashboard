import Home from './../../templates/home'
import Notes from './../../templates/notes'

import dashboard from './../../../assets/icons/dashboard.svg'
import education from './../../../assets/icons/education.svg'
import setting from './../../../assets/icons/setting.svg'

export const RouteData = [
	{
		id: 1,
		path: '/home',
		component: Home
	},
	{
		id: 2,
		path: '/notes',
		component: Notes
	}
];

export const NavData = [
	{
		id: 1,
		icon: dashboard,
		name: 'Dashboard',
		iconsize: 'large',
		theme: 'active'
	},
	{
		id: 2,
		icon: education,
		name: 'Lorem',
		iconsize: 'large',
		theme: 'secondary'
	},
	{
		id: 3,
		icon: setting,
		name: 'Ispum',
		iconsize: 'large',
		theme: 'secondary'
	},
]