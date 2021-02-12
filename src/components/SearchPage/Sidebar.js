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

				<Button handleClick={this.props.searchFunction}
				buttonText="Search" />

				<Button handleClick={this.props.sortFunction}
				buttonText="Sort" />
				
				<Dropdown />

			</aside>
		)
	}
}
