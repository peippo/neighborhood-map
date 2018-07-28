import React, { Component } from 'react';
import LocationFilters from './LocationFilters';

export class LocationList extends Component {
	render() {
		return (
			<div className="locations">
				<LocationFilters
					onFilterChange = {this.props.onFilterChange}
				/>
				<ul className="locations__list">
					{
						this.props.locations
						.filter(location => this.props.currentFilter === 'all' || location.type === this.props.currentFilter)
						.map((location) => (
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
