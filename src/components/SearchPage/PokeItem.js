import React, { Component } from 'react'
import style from '../stylesheets/PokeItem.module.css'

export default class PokeItem extends Component {
	render() {
		return (
			<li className={style.pokeEntry}>

				<h3>
					{this.props.pokeName}
				</h3>

				<img alt={this.props.pokeName} src={this.props.src} />

				<p>
					{this.props.pokeStat}
				</p>

			</li>
		)
	}
}
