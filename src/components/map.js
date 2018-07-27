import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
	state = {
		activeMarker: {},
		selectedPlace: {},
		showingInfoWindow: false,
	}

	onMarkerClicked = (props, marker, e) => this.setState({
		selectedPlace: props,
		activeMarker: marker,
		showingInfoWindow: true
	});

	onMapClicked = (props) => {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null
			})
		}
	};

	render() {
		return (
			<Map
				google={this.props.google}
				onClick={this.onMapClicked}
				zoom={11}
				initialCenter={{
					lat: 60.451813,
					lng: 22.26663
				}}
			>

				{
					this.props.locations.map((location) => (
						<Marker
							onClick={this.onMarkerClicked}
							key={location.name}
							name={location.name}
							position={{ lat: location.latitude, lng: location.longitude}}
						/>
					))
				}

				<InfoWindow
					marker={this.state.activeMarker}
					visible={this.state.showingInfoWindow}
				>
					<h2>{this.state.selectedPlace.name}</h2>
				</InfoWindow>
			</Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyAJWVDi1Ljaizd8KIbVjgPUBg_U0OyI57o'
})(MapContainer)
