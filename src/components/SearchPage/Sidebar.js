import React, { Component } from 'react'
import style from '../stylesheets/Sidebar.module.css'
import Dropdown from '../Common/Dropdown.js'
import Button from '../Common/Button.js'
import SearchBar from './SearchBar.js'

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
