import React, { Component } from 'react'
import style from '../stylesheets/Sidebar.module.css'
import Dropdown from '../Common/Dropdown.js'
import Button from '../Common/Button.js'
import SearchBar from './SearchBar.js'
import RadioButton from '../Common/RadioButton.js'

export default class APISidebar extends Component {
	render() {
		
		return (
			<aside className={style.aside}>

				<SearchBar handleInput={this.props.handleSearch} placeholder="Search pokedex" />
				<Button handleClick={this.props.handleSearchClick} buttonText="Click to search"/>
				
				<hr />
				
				<Dropdown
					label="Sort by:"
					handleDropdown={this.props.handleDropdown}/>
				<label className={style.radioHeader}>Sort direction:
					<div className={style.radioSet}>
						<RadioButton 
							handleRadio={this.props.handleSortRadio}
							name="sort-dir"
							value="asc"
							label="Up"
							radio={this.props.radio}
						/>
						<RadioButton 
							handleRadio={this.props.handleSortRadio}
							name="sort-dir"
							value="desc"
							label="Down"
							radio={this.props.radio}
						/>
					</div>
				</label>
				
			</aside>
		)
	}
}
