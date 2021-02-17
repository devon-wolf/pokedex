import React, { Component } from 'react'
import request from 'superagent'
import style from '../stylesheets/SearchPage.module.css'
import Sidebar from './Sidebar.js'
import PokeList from './PokeList.js'
import Spinner from '../Common/Spinner.js'


export default class APISearchPage extends Component {
	render() {
		return (
			<div className={style.searchPage}>
				{/* still need to insert all props */}
				<Sidebar />
				<main className={style.main}>
					{this.state.loading && <Spinner />}
					<PokeList />
				</main>
			</div>
		)
	}
}
