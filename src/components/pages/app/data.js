import Home from './../../templates/home'
import Posts from './../../templates/posts'

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
		path: '/posts',
		component: Posts
	}
];

export const NavData = [
	{
		id: 1,
		icon: dashboard,
		name: 'Dashboard',
		iconsize: 'large',
		path: '/home',
		theme: 'secondary'
	},
	{
		id: 2,
		icon: education,
		iconsize: 'large',
		name: 'Posts',
		path: '/posts',
		theme: 'secondary'
	},
	{
		id: 3,
		icon: setting,
		iconsize: 'large',
		name: 'Ispum',
		path: '/setting',
		theme: 'secondary'
	},
]