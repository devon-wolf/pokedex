import React, { Component } from 'react'
import style from '../stylesheets/DetailPage.module.css'
import StatsTable from './StatsTable.js'

export default class PokeDetails extends Component {
	render() {
		return (
			<>
			<section className={style.textSection}>
				<h1>{this.props.pokeName}</h1>
				<StatsTable
				pokeName={this.props.pokeName}
				pokeType={this.props.pokeType}
				pokeHP={this.props.pokeHP}
				pokeAttack={this.props.pokeAttack}
				pokeDefense={this.props.pokeDefense}
				pokeWeight={this.props.pokeWeight}
				pokeHeight={this.props.pokeHeight}
				/>
				
			</section>
				
			<section className={style.imageSection}>
				<img alt={this.props.pokeName} src={this.props.src} />
			</section>
			</>
		)
	}
}
