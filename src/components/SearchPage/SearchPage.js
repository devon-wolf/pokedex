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
		pokemon: [],
		searchQuery: '',
		sortDirection: '',
		sortCriteria: ''
	}
	
	sortAndUpdate = (callback) => {
		const sortedList = callback(pokeData, 'pokemon');
		this.setState({ pokemon: sortedList });
	}

	handleSearchQuery = (e) => {
		this.setState({ searchQuery: e.target.value});
		if (this.sortedList) {
			this.sortedList.filter(item => {
				return item['pokemon'].includes(this.searchQuery) || item['type_1'].includes(this.searchQuery);
			})
		}
		else {
			pokeData.filter(item => {
				console.log(item);
				return item['pokemon'].includes(this.searchQuery) || item['type_1'].includes(this.searchQuery);
			})
		}	
	}

	render() {
		console.log(this.state.searchQuery);
		return (
			<div className={style.searchPage}>
				<Sidebar 
				searchFunction={this.handleSearchQuery}
				sortUpFunction={(e) => this.sortAndUpdate(sortObjectsAscending)} 
				sortDownFunction={(e) => this.sortAndUpdate(sortObjectsDescending)} />

				<main className={style.main}>

					<PokeList 
					pokeData={this.sortedList || pokeData}/>

				</main>

			</div>
		)
	}
}
