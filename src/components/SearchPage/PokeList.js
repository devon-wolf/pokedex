import React, { Component } from 'react'
import PokeItem from './PokeItem.js'

export default class PokeList extends Component {
	render() {
		return (
			<ul>
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
