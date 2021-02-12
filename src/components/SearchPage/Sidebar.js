import React, { Component } from 'react'
import style from '../stylesheets/Sidebar.module.css'
import Dropdown from '../Common/Dropdown.js'
import Button from '../Common/Button.js'
import SearchBar from './SearchBar.js'

export default class Sidebar extends Component {
	render() {
		return (
			<aside className={style.aside}>

				<SearchBar handleInput={this.props.searchFunction} />
				
				<Dropdown handleDropdown={this.props.handleDropdown}/>

				<Button handleClick={this.props.sortUpFunction}
				buttonText="Sort Ascending" />

				<Button handleClick={this.props.sortDownFunction} buttonText="Sort Descending" />
				
			</aside>
		)
	}
}
