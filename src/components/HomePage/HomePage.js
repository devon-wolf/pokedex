import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import style from "../stylesheets/HomePage.module.css"

export default class HomePage extends Component {
	render() {
		return (
			<main className={style.main}>
				<NavLink exact className={style.link} to="/search"><h1>Click to search your pokedex</h1></NavLink>
			</main>
		)
	}
}
