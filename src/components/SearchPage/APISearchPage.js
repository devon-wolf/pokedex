import React, { Component } from 'react'
import request from 'superagent'
import style from '../stylesheets/SearchPage.module.css'
import PokeList from './PokeList.js'
import Spinner from '../Common/Spinner.js'
import APISidebar from './APISidebar.js'


export default class APISearchPage extends Component {
	state = {
		loading: false,
		pokemon: [],
		searchQuery: '',
		sortDirection: '',
		sortCriteria: '',
	}

	componentDidMount = async () => {
		await this.loadPokemon();
	}

	loadPokemon = async () => {
		this.setState({ 
			loading: true, 
			pokemon: [], 
		});

		const pokeData = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}`);

		this.setState({
			loading: false,
			pokemon: pokeData.body.results,
		})
	}

	render() {
		console.log(this.state)
		return (
			<div className={style.searchPage}>
				
				<APISidebar
					handleSearch={e => this.setState({ searchQuery: e.target.value })}
					handleSearchClick={e => this.loadPokemon()}

					handleDropdown={e => this.setState({ sortCriteria: e.target.value })}

					sortUpFunction={e => this.setState({ sortDirection: 'asc' })}
					sortDownFunction={e => this.setState({ sortDirection: 'desc' })}
				/>

				<main className={style.main}>
					{this.state.loading && <Spinner />}
					<PokeList data={this.state.pokemon}/>
				</main>
			</div>
		)
	}
}
