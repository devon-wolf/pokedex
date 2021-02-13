import React, { Component } from 'react'

export default class DropdownItem extends Component {
	render() {
		return (
			<option value={this.props.value}>
				{this.props.text}
			</option>
		)
	}
}
