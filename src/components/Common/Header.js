import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import style from '../stylesheets/Header.module.css'

export default class Header extends Component {
	render() {
		return (
			<header className={style.header}>
				<h2>
					Your Trusty Pokedex
				</h2>
				<nav>
					<NavLink exact activeClassName={style.current} className={style.navItem} to="/">Home</NavLink>
					<NavLink exact activeClassName={style.current} className={style.navItem} to="/search">Search</NavLink>
				</nav>
			</header>
		)
	}
}
