import React, { Component } from 'react'
import style from '../stylesheets/Sidebar.module.css'
import Dropdown from '../Common/Dropdown.js'
import Button from '../Common/Button.js'
import SearchBar from './SearchBar.js'
import RadioButton from '../Common/RadioButton.js'

export default class Sidebar extends Component {
	render() {
		return (
			<aside className={style.aside}>

				<SearchBar handleInput={this.props.searchFunction} />

				<label className={style.radioHeader}>Search within type:</label>
				<div className={style.radioSet}>
					<RadioButton name="category" value="bug" label="Bug" />
					<RadioButton name="category" value="fire" label="Fire" />
					<RadioButton name="category" value="grass" label="Grass" />
					<RadioButton name="category" value="normal" label="Normal" />
					<RadioButton name="category" value="water" label="Water" />
				</div>
				<hr />
				<Dropdown label="Sort by:" handleDropdown={this.props.handleDropdown}/>

				<Button handleClick={this.props.sortUpFunction}
				buttonText="Sort Ascending" />

				<Button handleClick={this.props.sortDownFunction} buttonText="Sort Descending" />
				
			</aside>
		)
	}
}
