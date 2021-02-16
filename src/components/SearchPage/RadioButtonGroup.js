import React, { Component } from 'react'
import RadioButton from '../Common/RadioButton.js'
import { getRadioOptions } from '../utils/sort-utils.js'

export default class RadioButtonGroup extends Component {
	render() {
		const radioOptions = getRadioOptions(this.props.data, this.props.key)
		console.log(radioOptions);
		return (
			<div>
				{radioOptions.map(option =>
					<RadioButton onChange={this.props.handleRadio} name={this.props.category} value={option} label={option} />) }
			</div>
		)
	}
}