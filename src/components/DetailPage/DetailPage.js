import React, { Component } from 'react'
import request from 'superagent'
import Spinner from '../Common/Spinner.js'
import style from '../stylesheets/DetailPage.module.css'
import PokeDetails from './PokeDetails.js'
import { capitalize } from '../utils/design-utils.js'

export default class DetailPage extends Component {
	state = {
		loading: false,
		pokemon: {},
	}

	componentDidMount = async () => {
		await this.loadDetails();
	}

	loadDetails = async () => {
		this.setState({
			loading: true,
			pokemon: {},
		})

		const pokeData = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemon}`);

		this.setState({
			loading: false,
			pokemon: pokeData.body.results[0],
		})
	}

	render() {
		return (
			<main className={style.main}>
				{this.state.loading && <Spinner />}
				<PokeDetails
					pokeName={this.state.pokemon.pokemon}
					src={this.state.pokemon.url_image}
					pokeType={this.state.pokemon.type_1}
					pokeHP={this.state.pokemon.hp}
					pokeAttack={this.state.pokemon.attack}
					pokeDefense={this.state.pokemon.defense}
					pokeWeight={this.state.pokemon.weight}
					pokeHeight={this.state.pokemon.height}	
				/>
			</main>
		)
	}
}