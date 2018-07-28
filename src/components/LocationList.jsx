import React, { Component } from 'react';

export class LocationList extends Component {
	render() {
		return (
			<div className="locations">
				<h2>Locations</h2>
				<ul>
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
