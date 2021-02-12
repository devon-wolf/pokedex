import React, { Component } from 'react'
import style from "../stylesheets/HomePage.module.css"

export default class HomePage extends Component {
	render() {
		return (
			<main className={style.main}>
				<h1>Click to search your pokedex</h1>
			</main>
		)
	}
}
