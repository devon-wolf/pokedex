import React, { Component } from 'react'

export default class RadioButton extends Component {
	render() {
		return (
			<label>
				<input type="radio" name={this.props.name} value={this.props.value} />
				{this.props.label}
			</label>
		)
	}
}
