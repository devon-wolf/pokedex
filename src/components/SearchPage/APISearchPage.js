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
		totalPokemon: 0,
		searchQuery: '',
		sortDirection: '',
		sortCriteria: '',
		page: 1,
		perPage: 20
	}

	componentDidMount = async () => {
		await this.loadPokemon();
	}

	loadPokemon = async () => {
		this.setState({ 
			loading: true, 
			pokemon: [], 
		});

		const pokeData = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&sort=${this.state.sortCriteria}&direction=${this.state.sortDirection}&page=${this.state.page}&perPage=${this.state.perPage}`);

		this.setState({
			loading: false,
			pokemon: pokeData.body.results,
			totalPokemon: pokeData.body.count
		})
	}

	loadNextPage = async () => {
		await this.setState({ page: this.state.page + 1 });
		await this.loadPokemon();
	}

	loadPrevPage = async () => {
		await this.setState({ page: this.state.page - 1 });
		await this.loadPokemon();
	}

	render() {
		const lastPage = Math.ceil(this.state.totalPokemon / this.state.perPage);

		return (
			<div className={style.searchPage}>
				
				<APISidebar
					handleSearch={e => this.setState({ searchQuery: e.target.value })}
					handleDropdown={e => this.setState({ sortCriteria: e.target.value })}
					handleSortRadio={e => this.setState({ sortDirection: e.target.value })}
					handlePerPage={e => this.setState({ perPage: Number(e.target.value) })}
					
					handleSearchClick={e => this.loadPokemon()}
					handlePrevClick={e => this.loadPrevPage()}
					handleNextClick={e => this.loadNextPage()}
					
					radio={this.state.sortDirection}
					disabledPrev={this.state.page === 1}
					disabledNext={this.state.page === lastPage}
				
				/>

				<main className={style.main}>
					{this.state.loading
					? <Spinner />
					: <PokeList data={this.state.pokemon}/>}
				</main>
			</div>
		)
	}
}
