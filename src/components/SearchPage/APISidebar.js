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
				
				<Dropdown
					label="Sort by:"
					handleDropdown={this.props.handleDropdown}/>
				
				<label>Sort direction:
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

				<hr />

				<Button handleClick={this.props.handleSearchClick} buttonText="Click to search"/>

				<hr />

				<label>Results per page:
					<select onChange={this.props.handlePerPage}>
						<option value="20">20</option>
						<option value="50">50</option>
						<option value="100">100</option>
					</select>
				</label>

				<Button disabled={this.props.disabledPrev} handleClick={this.props.handlePrevClick} buttonText="<=="/>
				<Button handleClick={this.props.handleNextClick} buttonText="==>"/>
				
			</aside>
		)
	}
}
