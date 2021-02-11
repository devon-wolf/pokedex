import React, { Component } from 'react'
import style from '../stylesheets/Common.module.css'
import pageStyle from '../stylesheets/SearchPage.module.css'
import Sidebar from '../Common/Sidebar.js'

export default class SearchPage extends Component {
	render() {
		return (
			<div className={pageStyle.searchPage}>
				<Sidebar />
				<main className={style.main}>
					<h1>WHO'S THAT POKEMON?</h1>
				</main>
			</div>
		)
	}
}
