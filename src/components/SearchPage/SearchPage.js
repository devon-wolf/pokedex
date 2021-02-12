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
	
	render() {
		return (
			<div className={style.searchPage}>
				<Sidebar searchFunction={(e) => console.log('search click')} sortFunction={(e) => sortObjectsAscending(pokeData, 'pokemon')}/>

				<main className={style.main}>

					<PokeList pokeData={pokeData}/>

				</main>

			</div>
		)
	}
}
