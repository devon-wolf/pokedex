import React, { Component } from 'react'
import RadioButton from '../Common/RadioButton.js'
import style from '../stylesheets/Sidebar.module.css'
import { capitalize } from '../utils/design-utils.js'
// import { getRadioOptions } from '../utils/sort-utils.js'

// type-only for now

export default class RadioButtonGroup extends Component {
	render() {
		const radioOptions = ['bug', 'fire', 'grass', 'normal', 'water', 'psychic', 'poison', 'electric', 'fairy', 'rock', 'ground', 'fighting', 'all'];
		
		return (
			<label className={style.radioHeader}>Search within type:
				<div className={style.radioSet}>
					{radioOptions.map(option => {
						return <RadioButton 
						handleRadio={this.props.handleRadio} 
						name="type"
						value={option}
						label={capitalize(option)}
						key={option}
						/>
					}
				)}
				</div>
			</label>
		)
	}
}