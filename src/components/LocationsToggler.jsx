import React, { Component } from 'react';

export class LocationsToggler extends Component {
	render() {
		return (
			<button
				className = "locations-toggler"
				aria-label="Toggle location list"
				onClick = {() => this.props.toggleLocationsList()}
			></button>
		);
	}
}

export default LocationsToggler;
