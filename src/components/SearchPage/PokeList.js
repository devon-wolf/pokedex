import React, { Component } from 'react'
import PokeItem from './PokeItem.js'
import style from '../stylesheets/PokeList.module.css'

export default class PokeList extends Component {
	render() {
		return (
			<ul className={style.list}>
				{this.props.pokeData.map(pokeObject =>
					<PokeItem 
					pokeName={pokeObject.pokemon}
					src={pokeObject.url_image}
					pokeStat={pokeObject.type_1} key={pokeObject.id}
					/>)}
			</ul>
		)
	}
}
