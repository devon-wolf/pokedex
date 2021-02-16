import React, { Component } from 'react'
import RadioButton from '../Common/RadioButton.js'
import style from '../stylesheets/Sidebar.module.css'
import { capitalize } from '../utils/design-utils.js'
import { getRadioOptions } from '../utils/sort-utils.js'

// type-only for now

export default class RadioButtonGroup extends Component {
	render() {
		
		
		return (
			<label className={style.radioHeader}>Search within type:
				<div className={style.radioSet}>
					{this.props.radioOptions.map(option => {
						return <RadioButton 
						handleRadio={this.props.handleRadio} 
						name={this.props.sortKey}
						value={option}
						label={capitalize(option)}
						key={option}
						radio={this.props.radio}
						/>
					}
				)}
				</div>
			</label>
		)
	}
}