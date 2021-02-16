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
		types: [],
		searchQuery: '',
		radio: '',
		sortCriteria: 'pokemon'
	}
	
	componentDidMount = async() => {
		await this.loadPokemon();
		await this.loadTypes();
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

	loadTypes = async () => {
		const typeData = await request.get('https://pokedex-alchemy.herokuapp.com/api/pokedex/types');

		const types = typeData.body.map(object => object.type)
		console.log(types);
		this.setState({ types: types});
	}

	// getRadioOptions = async(key) => {
	// 	await this.loadTypes()
	// 	let radioOptions = [];
	// 	for (let obj in this.state.types) {
	// 		radioOptions.push(obj[key]);
	// 	}
	// 	return radioOptions;
	// }

	sortAndUpdate = async(sortFunction) => {
		const sortedList = sortFunction(this.state.pokemon, this.state.sortCriteria);

		this.setState({ pokemon: sortedList });
	}

	render() {
		const radioFilter = 
			this.state.pokemon.filter(item => {
			if (!this.state.type || this.state.type === 'all') return true;
			return item['type_1'] === this.state.type;
		});

		const filteredList =
			radioFilter.filter(item => {
			return item['pokemon'].includes(this.state.searchQuery) || item['type_1'].includes(this.state.searchQuery);
		});

		// const radioTypeOptions = this.getRadioOptions('type');
		// console.log(radioTypeOptions);

		return (
			<div className={style.searchPage}>
				<Sidebar
				radioOptions={this.state.types}
				radio={this.state.radio}

				handleRadio={(e) =>
					this.setState({ type: e.target.value })}

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