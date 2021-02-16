import React, { Component } from 'react'

export default class RadioButton extends Component {
	render() {
		return (
			<label>
				<input 
				type="radio" 
				onChange={this.props.handleRadio} 
				name={this.props.name}
				value={this.props.value}
				checked={this.props.radio === this.props.value} />
				{this.props.label}
			</label>
		)
	}
}
