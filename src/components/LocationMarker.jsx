/*global google*/
import React, { Component } from 'react';
import { Marker } from 'react-google-maps';
import LoadingSpinner from './LoadingSpinner';
import InfoBoxContent from './InfoBoxContent';
import LocationInfoError from './LocationInfoError';
import SeaIcon from "../images/sea-marker.png";
import LakeIcon from "../images/lake-marker.png";
import PoolIcon from "../images/pool-marker.png";

const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");

class LocationMarker extends Component {
	render() {

		// Get marker icon based on location type
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

		// Add bouncing animation to marker if the name property on the marker
		// matches name property on the currently selected location
		let animationStatus = false;
		if (this.props.selectedLocation.venueId === this.props.venueId) {
			animationStatus = google.maps.Animation.BOUNCE
		}

		return (
			<Marker
				position = {this.props.position}
				icon = {markerIcon}
				onClick = {() => this.props.onLocationSelection(this.props.venueId, this.props.position.lat, this.props.position.lng)}
				animation = {animationStatus}
			>

			{
				// Show info box if the venue id property on the marker
				// matches venue id property on the currently selected location

				// Show loading spinner if we are still loading location info
				// When location info is loaded, show error if we have an error, otherwise show loaded location info
				this.props.selectedLocation.venueId === this.props.venueId &&
				<InfoBox
					options = {{ closeBoxURL: ''}}
					onCloseClick = {() => this.props.onLocationSelection(this.props.venueId)}
				>
					{this.props.loadingLocationInfo ?
						<LoadingSpinner /> :

						this.props.loadingLocationInfoError ?
						<LocationInfoError /> :
						<InfoBoxContent locationInfo={this.props.locationInfo} />
					}
				</InfoBox>
			}

			</Marker>
		);
	}
}

export default LocationMarker;
