import React, { Component } from 'react'
import request from 'superagent'
import Spinner from '../Common/Spinner.js'
// import { capitalize } from '../utils/design-utils.js'

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
			<main>
				<h1>This is the detail page.</h1>
				{this.state.loading && <Spinner />}
				<p>{this.state.pokemon.pokemon}</p>
				<p>{this.state.pokemon.type_1}</p>
				
				<img alt={this.state.pokemon.pokemon} src={this.state.pokemon.url_image}/>
			</main>
		)
	}
}