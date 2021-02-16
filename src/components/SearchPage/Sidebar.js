import React, { Component } from 'react'
import style from '../stylesheets/Sidebar.module.css'
import Dropdown from '../Common/Dropdown.js'
import Button from '../Common/Button.js'
import SearchBar from './SearchBar.js'
import RadioButton from '../Common/RadioButton.js'
import RadioButtonGroup from './RadioButtonGroup.js'

export default class Sidebar extends Component {
	render() {
		return (
			<aside className={style.aside}>

				<SearchBar handleInput={this.props.handleSearch} placeholder='Search pokedex' />

				<RadioButtonGroup handleRadio={this.props.handleRadio}/>

				{/* <label className={style.radioHeader}>Search within type:</label>
				<div className={style.radioSet}>
					<RadioButton handleRadio={this.props.handleRadio} name="type" value="bug" label="Bug" />
					<RadioButton handleRadio={this.props.handleRadio} name="type" value="fire" label="Fire" />
					<RadioButton handleRadio={this.props.handleRadio} name="type" value="grass" label="Grass" />
					<RadioButton handleRadio={this.props.handleRadio} name="type" value="normal" label="Normal" />
					<RadioButton handleRadio={this.props.handleRadio} name="type" value="water" label="Water" />
					<RadioButton handleRadio={this.props.handleRadio} name="type" value="psychic" label="Psychic" />
					<RadioButton handleRadio={this.props.handleRadio} name="type" value="poison" label="Poison" />
					<RadioButton handleRadio={this.props.handleRadio} name="type" value="electric" label="Electric" />
					<RadioButton handleRadio={this.props.handleRadio} name="type" value="fairy" label="Fairy" />
					<RadioButton handleRadio={this.props.handleRadio} name="type" value="rock" label="Rock" />
					<RadioButton handleRadio={this.props.handleRadio} name="type" value="ground" label="Ground" />
					<RadioButton handleRadio={this.props.handleRadio} name="type" value="fighting" label="Fighting" />
					<RadioButton handleRadio={this.props.handleRadio} name="type" value="all" label="All" />
				</div> */}
				
				<hr />
				
				<Dropdown label="Sort by:" handleDropdown={this.props.handleDropdown}/>

				<Button handleClick={this.props.sortUpFunction}
				buttonText="Sort Ascending" />

				<Button handleClick={this.props.sortDownFunction} buttonText="Sort Descending" />
				
			</aside>
		)
	}
}