import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import style from '../stylesheets/Header.module.css'

export default class Header extends Component {
	render() {
		return (
			<header>
				<NavLink exact activeClassName={style.current} to="/">Home</NavLink>
				<NavLink exact activeClassName={style.current} to="/search">Search</NavLink>
			</header>
		)
	}
}
