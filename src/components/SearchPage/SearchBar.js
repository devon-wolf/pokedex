import React, { Component } from 'react'

export default class SearchBar extends Component {
	render() {
		return (
			<input onChange={this.props.handleInput}placeholder={this.props.placeholder}></input>
		)
	}
}
