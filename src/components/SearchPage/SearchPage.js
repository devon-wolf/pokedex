import React, { Component } from 'react'
import style from '../stylesheets/SearchPage.module.css'
import Sidebar from './Sidebar.js'
import PokeList from './PokeList.js'
import {
	sortObjectsAscending,
	sortObjectsDescending
} from '../utils/sort-utils.js'
import request from 'superagent'
import Spinner from '../Common/Spinner.js'

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
	}

	loadPokemon = async () => {
		this.setState({ 
			loading: true, 
			pokemon: [] 
		});

		const pokeData = await request.get('https://pokedex-alchemy.herokuapp.com/api/pokedex');

		const filteredTypes = () => {
			const pokeArray = pokeData.body.results;
			let typeArray = [];
			for (let i of pokeArray) {
				if (!typeArray.some(n => n === i.type_1)) typeArray.push(i.type_1)
			}
			return typeArray;
		}

		this.setState({ 
			loading: false, 
			pokemon: pokeData.body.results,
			types: filteredTypes()
		});
	}

	searchByName = async () => {
		if (!this.state.searchQuery) return;
		this.setState({ loading: true });

		const searchData = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}`);

		this.setState({
			loading: false,
			pokemon: searchData.body.results
		})
	}

	sortAndUpdate = (sortFunction) => {
		const sortedList = sortFunction(this.state.pokemon, this.state.sortCriteria);

		this.setState({ pokemon: sortedList });
	}

	render() {
		const radioFilter = 
			this.state.pokemon.filter(item => {
			if (!this.state.radio || this.state.radio === 'all') return true;
			return item['type_1'] === this.state.radio;
		});

		const filteredList =
			radioFilter.filter(item => {
			return item['pokemon'].includes(this.state.searchQuery) || item['type_1'].includes(this.state.searchQuery);
		});
		
		return (
			<div className={style.searchPage}>
				<Sidebar
					radioOptions={this.state.types}
					radio={this.state.radio}
					handleRadio={(e) => this.setState({ radio: e.target.value })}

					handleDropdown={(e) => this.setState({ sortCriteria: e.target.value })}

					handleSearch={(e) => this.setState({ searchQuery: e.target.value })}

					sortUpFunction={(e) => this.sortAndUpdate(sortObjectsAscending)}

					sortDownFunction={(e) => this.sortAndUpdate(sortObjectsDescending)} />
				
				<main className={style.main}>
					{this.state.loading && <Spinner />}
					<PokeList 
					data={filteredList}/>
				</main>
			</div>
		)
	}
}