import React, { Component } from 'react';
import Logo from './Logo';

export class LocationList extends Component {
	render() {
		return (
			<div className="locations">
				<Logo />
				<ul className="locations__list">
					{
						this.props.locations.map((location) => (
							<li className = "locations__item" key = {location.name}>
								{location.shortName}
							</li>
						))
					}
				</ul>
			</div>
		);
	}
}

export default LocationList;
