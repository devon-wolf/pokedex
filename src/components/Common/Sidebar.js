import React, { Component } from 'react'
import style from '../stylesheets/Sidebar.module.css'
import Dropdown from './Dropdown.js'
import Button from './Button.js'
import SearchBar from '../SearchPage/SearchBar.js'

export default class Sidebar extends Component {
	render() {
		return (
			<aside className={style.aside}>
				<SearchBar />
				<Button handleClick={(e) => 
				console.log('someone clicked search')}
				buttonText="Search" />
				<Button handleClick={(e) => 
				console.log('someone clicked sort')}
				buttonText="Sort" />
				<Dropdown />

			</aside>
		)
	}
}
