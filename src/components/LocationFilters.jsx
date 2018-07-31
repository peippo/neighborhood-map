import React, { Component } from 'react';

export class LocationFilters extends Component {
	render() {
		return (
			<div className="filter" tabIndex="1" aria-label="Filter results by location type">
				<label className="filter__label" htmlFor="type-selection">Show: </label>
				<select id="type-selection" onChange={(event) => this.props.onFilterChange(event.target.value)}>
					<option value="all">All</option>
					<option value="sea">Sea</option>
					<option value="lake">Lake</option>
					<option value="pool">Pool</option>
				</select>
			</div>
		);
	}
}

export default LocationFilters;
