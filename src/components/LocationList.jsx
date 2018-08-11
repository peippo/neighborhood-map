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
			<div className="locations" role="navigation">
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
									this.props.selectedLocation.venueId === location.venueId ?
									'locations__item locations__item--selected' :
									'locations__item'
								}
								key = {location.venueId}
								onClick = {() => this.props.onLocationSelection(location.venueId)}
							>
								<button className="locations__link">{location.shortName}</button>
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
