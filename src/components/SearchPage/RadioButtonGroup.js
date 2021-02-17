import React, { Component } from 'react'
import RadioButton from '../Common/RadioButton.js'
import style from '../stylesheets/Sidebar.module.css'
import { capitalize } from '../utils/design-utils.js'

export default class RadioButtonGroup extends Component {
	render() {
		return (
			<label className={style.radioHeader}>Search within type:
				<div className={style.radioSet}>
					<RadioButton 
					handleRadio={this.props.handleRadio} 
					name={this.props.sortKey}
					value="all" 
					label="All" 
					key="all" 
					radio={this.props.radio}/>

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