import React, { Component } from 'react';
import { Marker } from 'react-google-maps';
import MarkerIcon from "../images/swim-marker.png";

class LocationMarker extends Component {
	render() {
		return (
			<Marker
				position = {this.props.position}
				icon = {MarkerIcon}
			>
			</Marker>
		);
	}
}

export default LocationMarker;
