/*global google*/
import React, { Component } from 'react';
import { Marker } from 'react-google-maps';
import SeaIcon from "../images/sea-marker.png";
import LakeIcon from "../images/lake-marker.png";
import PoolIcon from "../images/pool-marker.png";

const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");

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

		let animationStatus = false;
		if (this.props.selectedLocation.name === this.props.name) {
			animationStatus = google.maps.Animation.BOUNCE
		}

		return (
			<Marker
				position = {this.props.position}
				icon = {markerIcon}
				onClick = {() => this.props.onLocationSelection(this.props.name)}
				animation = {animationStatus}
			>

			{
				this.props.selectedLocation.name === this.props.name &&
				<InfoBox
					onCloseClick={() => this.props.onLocationSelection(this.props.name)}
				>
					<h2 className="infoBox__heading">{this.props.name}</h2>
				</InfoBox>
			}

			</Marker>
		);
	}
}

export default LocationMarker;
