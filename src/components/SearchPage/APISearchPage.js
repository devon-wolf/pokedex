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
	}

	componentDidMount = async () => {
		await this.loadPokemon();
	}

	loadPokemon = async () => {
		this.setState({ 
			loading: true, 
			pokemon: [], 
		});

		const pokeData = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex${this.state.searchQuery}`);

		this.setState({
			loading: false,
			pokemon: pokeData.body.results,
		})
	}

	render() {
		return (
			<div className={style.searchPage}>
				
				<APISidebar
					handleSearch={e => this.setState({ searchQuery: e.target.value })}
					handleSearchClick={e => console.log('search click')}

					handleDropdown={e => console.log('dropdown change')}

					sortUpFunction={e => console.log('sort up click')}
					sortDownFunction={e => console.log('sort down function')}
				/>

				<main className={style.main}>
					{this.state.loading && <Spinner />}
					<PokeList data={this.state.pokemon}/>
				</main>
			</div>
		)
	}
}
