import React, { Component } from 'react';
import { Marker } from 'react-google-maps';
import SeaIcon from "../images/sea-marker.png";
import LakeIcon from "../images/lake-marker.png";
import PoolIcon from "../images/pool-marker.png";

class LocationMarker extends Component {
	render() {
		let markerIcon;
		switch (this.props.type) {
			case 'sea':
				markerIcon = SeaIcon;
				break;
			case 'lake':
				markerIcon = LakeIcon;
				break;
			case 'pool':
				markerIcon = PoolIcon;
				break;
			default:
				break;
		}

		return (
			<Marker
				position = {this.props.position}
				icon = {markerIcon}
			>
			</Marker>
		);
	}
}

export default LocationMarker;
