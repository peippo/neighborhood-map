import React, { Component } from 'react';
import Map from './Map';

class MapContainer extends Component {
	render() {
		return (
			<Map
				locations = {this.props.locations}
				currentFilter = {this.props.currentFilter}
				googleMapURL = {'https://maps.googleapis.com/maps/api/js?key=AIzaSyAJWVDi1Ljaizd8KIbVjgPUBg_U0OyI57o'}
				loadingElement = {<div style={{ width: '100%', height: '100%' }} />}
				containerElement = {<section className="map-container" />}
				mapElement = {<div style={{ width: '100%', height: '100%' }} />}
			/>
		);
	}
}

export default MapContainer;
