import React, { Component } from 'react';

export class LocationsToggler extends Component {
	render() {
		return (
			<button
				className = "locations-toggler"
				onClick = {() => this.props.toggleLocationsList()}
			></button>
		);
	}
}

export default LocationsToggler;
