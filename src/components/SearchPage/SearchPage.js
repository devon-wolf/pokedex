import React, { Component } from 'react'
import pokeData from '../../data/poke-data.js'
import style from '../stylesheets/SearchPage.module.css'
import Sidebar from './Sidebar.js'
import PokeList from './PokeList.js'
import {
	sortObjectsAscending,
	sortObjectsDescending
} from '../utils/sort-utils.js'

export default class SearchPage extends Component {
	state = {
		pokemon: pokeData,
		searchQuery: '',
		category: '',
		sortCriteria: 'pokemon'
	}
	
	sortAndUpdate = (callback) => {
		const sortedList = callback(this.state.pokemon, this.state.sortCriteria);

		this.setState({ pokemon: sortedList });
	}

	handleSearchQuery = (e) => {
		this.setState({ searchQuery: e.target.value });
	}

	handleDropdownChange = (e) => {
		this.setState({ sortCriteria: e.target.value });
	}

	handleRadioChange = (e) => {
		this.setState({ category: e.target.value });
	}

	render() {
		const radioFilter = this.state.pokemon.filter(item => {
			if (!this.state.category || this.state.category === 'all') return true;
			return item['type_1'] === this.state.category;
		});

		const filteredList = radioFilter.filter(item => {
			return item['pokemon'].includes(this.state.searchQuery) || item['type_1'].includes(this.state.searchQuery);
		});

		return (
			<div className={style.searchPage}>
				<Sidebar 
				handleRadio={this.handleRadioChange}
				handleDropdown={this.handleDropdownChange}
				searchFunction={this.handleSearchQuery}
				sortUpFunction={(e) => this.sortAndUpdate(sortObjectsAscending)} 
				sortDownFunction={(e) => this.sortAndUpdate(sortObjectsDescending)} />

				<main className={style.main}>
					<PokeList 
					pokeData={filteredList}/>
				</main>
			</div>
		)
	}
}
