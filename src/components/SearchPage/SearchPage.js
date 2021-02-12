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
		searchCriteria: '',
		sortDirection: '',
		sortCriteria: ''
	}
	
	sortAndUpdate = (callback) => {
		const sortedList = callback(pokeData, 'pokemon');
		this.setState({ pokemon: sortedList });
	}

	render() {
		return (
			<div className={style.searchPage}>
				<Sidebar 
				searchFunction={(e) => console.log('input change')}
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
