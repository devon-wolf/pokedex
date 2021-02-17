import React, { Component } from 'react'
import style from '../stylesheets/DetailPage.module.css'

export default class PokeDetails extends Component {
	render() {
		return (
			<>
			<section className={style.textSection}>
				<h1>{this.props.pokeName}</h1>
				
				<p>Type: {this.props.pokeType}</p>
				<p>HP: {this.props.pokeHP}</p>
				<p>Attack: {this.props.pokeAttack}</p>
				<p>Defense: {this.props.pokeDefense}</p>
				<p>Weight: {this.props.pokeWeight}</p>
				<p>Height: {this.props.pokeHeight}</p>
			</section>
				
			<section className={style.imageSection}>
				<img alt={this.props.pokeName} src={this.props.src} />
			</section>
			</>
		)
	}
}
