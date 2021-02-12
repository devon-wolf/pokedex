import React, { Component } from 'react'
import pokeData from '../../data/poke-data.js'
import style from '../stylesheets/SearchPage.module.css'
import Sidebar from './Sidebar.js'
import PokeList from './PokeList.js'

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
				<Sidebar />
				<main className={style.main}>
					<h1>WHO'S THAT POKEMON?</h1>
					<PokeList pokeData={pokeData}/>
				</main>
			</div>
		)
	}
}
