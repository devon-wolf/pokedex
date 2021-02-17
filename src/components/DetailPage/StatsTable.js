import React, { Component } from 'react'
import style from '../stylesheets/DetailPage.module.css'

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
						<td className={style.property}>
							Type:
						</td>
						<td>
							{this.props.pokeType}
						</td>
					</tr>
					
					<tr>
						<td className={style.property}>
							HP:
						</td>
						<td>
							{this.props.pokeHP}
						</td>
					</tr>

					<tr>
						<td className={style.property}>
							Attack:
						</td>
						<td>
							{this.props.pokeAttack}
						</td>
					</tr>

					<tr>
						<td className={style.property}>
							Defense:
						</td>
						<td>
							{this.props.pokeDefense}
						</td>
					</tr>

					<tr>
						<td className={style.property}>
							Weight:
						</td>
						<td>
							{this.props.pokeWeight}
						</td>
					</tr>

					<tr>
						<td className={style.property}>
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
