import React, { Component } from 'react'
import DropdownItem from './DropdownItem.js'

export default class Dropdown extends Component {
	render() {
		return (
			<label>
				<p>{this.props.label}</p>
				<select onChange={this.props.handleDropdown}>
					<DropdownItem text="Name" value="pokemon" />
					<DropdownItem text="Type" value="type_1"/>
					<DropdownItem text="Weight" value="weight"/>
					<DropdownItem text="HP" value="hp" />
					<DropdownItem text="Attack" value="attack" />
					<DropdownItem text="Defense" value="defense" />
				</select>
			</label>
		)
	}
}
