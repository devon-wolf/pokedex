import React, { Component } from 'react'

export default class StatsTable extends Component {
	render() {
		return (
			<table>
				<thead>
					<tr>
						<th colSpan="2">PokeStats for {this.props.pokeName}</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							Type:
						</td>
						<td>
							{this.props.pokeType}
						</td>
					</tr>
					
					<tr>
						<td>
							HP:
						</td>
						<td>
							{this.props.pokeHP}
						</td>
					</tr>

					<tr>
						<td>
							Attack:
						</td>
						<td>
							{this.props.pokeAttack}
						</td>
					</tr>

					<tr>
						<td>
							Defense
						</td>
						<td>
							{this.props.pokeDefense}
						</td>
					</tr>

					<tr>
						<td>
							Weight:
						</td>
						<td>
							{this.props.pokeWeight}
						</td>
					</tr>

					<tr>
						<td>
							Height:
						</td>
						<td>
							{this.props.pokeHeight}
						</td>
					</tr>
				</tbody>	
			</table>
		)
	}
}
