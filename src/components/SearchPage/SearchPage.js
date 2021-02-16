import React, { Component } from 'react'
import style from '../stylesheets/SearchPage.module.css'
import Sidebar from './Sidebar.js'
import PokeList from './PokeList.js'
import {
	sortObjectsAscending,
	sortObjectsDescending
} from '../utils/sort-utils.js'
import request from 'superagent'

export default class SearchPage extends Component {
	state = {
		loading: false,
		pokemon: [],
		searchQuery: '',
		category: '',
		sortCriteria: 'pokemon'
	}
	
	componentDidMount = async() => {
		await this.loadPokemon();
	}

	loadPokemon = async () => {
		this.setState({ 
			loading: true, 
			pokemon: [] 
		});

		const pokeData = await request.get('https://pokedex-alchemy.herokuapp.com/api/pokedex');

		this.setState({ 
			loading: false, 
			pokemon: pokeData.body.results 
		});
	}

	sortAndUpdate = async(sortFunction) => {
		const sortedList = sortFunction(this.state.pokemon, this.state.sortCriteria);

		this.setState({ pokemon: sortedList });
	}

	render() {
		const radioFilter = 
			this.state.pokemon.filter(item => {
			if (!this.state.category || this.state.category === 'all') return true;
			return item['type_1'] === this.state.category;
		});

		const filteredList =
			radioFilter.filter(item => {
			return item['pokemon'].includes(this.state.searchQuery) || item['type_1'].includes(this.state.searchQuery);
		});

		return (
			<div className={style.searchPage}>
				<Sidebar 
				handleRadio={(e) => this.setState({ category: e.target.value })}

				handleDropdown={(e) => this.setState({ sortCriteria: e.target.value })}

				handleSearch={(e) => this.setState({ searchQuery: e.target.value })}

				sortUpFunction={(e) => this.sortAndUpdate(sortObjectsAscending)}

				sortDownFunction={(e) => this.sortAndUpdate(sortObjectsDescending)} />
				
				<main className={style.main}>
					<PokeList 
					data={filteredList}/>
				</main>
			</div>
		)
	}
}
