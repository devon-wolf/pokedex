import React, { Component } from 'react'
import PokeItem from './PokeItem.js'
import style from '../stylesheets/PokeList.module.css'
import { capitalize } from '../utils/design-utils.js'

export default class PokeList extends Component {
	render() {
		return (
			<ul className={style.list}>
				{this.props.data.map(pokeObject =>
					<PokeItem 
					pokeName={capitalize(pokeObject.pokemon)}
					src={pokeObject.url_image}
					pokeStat={pokeObject.type_1} key={pokeObject.id}
					/>)}
			</ul>
		)
	}
}
