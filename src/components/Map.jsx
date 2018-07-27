import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
	render() {
		return (
			<Map
				google={this.props.google}
				onClick={this.props.onMapClicked}
				zoom={11}
				initialCenter={{
					lat: 60.451813,
					lng: 22.26663
				}}
			>

				{
					this.props.locations.map((location) => (
						<Marker
							onClick={this.props.onMarkerClicked}
							key={location.name}
							name={location.name}
							position={{ lat: location.latitude, lng: location.longitude}}
						/>
					))
				}

				<InfoWindow
					marker={this.props.activeMarker}
					visible={this.props.showingInfoWindow}
				>
					<div>
						<h2>{this.props.selectedPlace.name}</h2>
					</div>
				</InfoWindow>
			</Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyAJWVDi1Ljaizd8KIbVjgPUBg_U0OyI57o'
})(MapContainer)
