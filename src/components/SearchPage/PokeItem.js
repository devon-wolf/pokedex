import React, { Component } from 'react'
import style from '../stylesheets/PokeItem.css'

export default class PokeItem extends Component {
	render() {
		return (
			<div className={style.pokeEntry}>

				<h3>
					{this.props.pokeName}
				</h3>

				<img alt={this.props.pokeName} src={this.props.src} />

				<p>
					{this.props.pokeStat}
				</p>

			</div>
		)
	}
}
