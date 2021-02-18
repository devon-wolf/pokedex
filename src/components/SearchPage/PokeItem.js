import React, { Component } from 'react'
import style from '../stylesheets/PokeItem.module.css'
import { Link } from 'react-router-dom'

export default class PokeItem extends Component {
	render() {
		return (
			<li className={style.pokeEntry}>
				<Link to={`/api-search/${this.props.pokeName}`}>
					<h3>
						{this.props.pokeName}
					</h3>
					<img alt={this.props.pokeName} src={this.props.src} />
					<p>
						{this.props.pokeStat}
					</p>
				</Link>
			</li>
		)
	}
}
