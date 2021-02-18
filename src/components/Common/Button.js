import React, { Component } from 'react'

export default class Button extends Component {
	render() {
		return (
			<button disabled={this.props.disabled} onClick={this.props.handleClick}>
				{this.props.buttonText}
			</button>
		)
	}
}
