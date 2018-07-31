import React, { Component } from 'react';
import LocationFilters from './LocationFilters';
import LocationsToggler from './LocationsToggler';

export class LocationList extends Component {
	render() {
		const locationsListClasses =
		this.props.locationsListVisible ?
		'locations__list' :
		'locations__list locations__list--minimized'

		return (
			<div className="locations">
				<LocationFilters
					onFilterChange = {this.props.onFilterChange}
				/>
				<ul className = {`${locationsListClasses}`}>
					{
						this.props.locations
						.filter(location => this.props.currentFilter === 'all' || location.type === this.props.currentFilter)
						.map((location) => (
							<li
								className = {
									this.props.selectedLocation.name === location.name ?
									'locations__item locations__item--selected' :
									'locations__item'
								}
								key = {location.name}
								onClick = {() => this.props.onLocationSelection(location.name, location.venueId)}
							>
								{location.shortName}
							</li>
						))
					}
				</ul>
				<LocationsToggler
					toggleLocationsList = {this.props.toggleLocationsList}
				/>
			</div>
		);
	}
}

export default LocationList;
