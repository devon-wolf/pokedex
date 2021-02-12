import React, { Component } from 'react'

export default class SearchBar extends Component {
	render() {
		return (
			<input onChange={this.props.handleInput}placeholder="Search pokedex"></input>
		)
	}
}
