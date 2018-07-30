import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import LocationMarker from './LocationMarker';

const mapStyles = require("./mapStyles.json");

const Map = withScriptjs(
	withGoogleMap(props => {

		// Get an array of filtered markers
		const filteredMarkers = props.locations
		.filter(location => props.currentFilter === 'all' || location.type === props.currentFilter);

		// Build Marker components based on filtered markers array
		const markers = filteredMarkers
		.map(location => (
			<LocationMarker
				key = {location.name}
				type = {location.type}
				name = {location.name}
				position = {{lat: location.latitude, lng: location.longitude}}
				selectedLocation = {props.selectedLocation}
				onLocationSelection = {props.onLocationSelection}
			/>
		));

		// Extend map bounds based on filtered markers array
		const bounds = new window.google.maps.LatLngBounds();
		filteredMarkers
		.map(location => (
			bounds.extend({lat: location.latitude, lng: location.longitude})
		));

		return (
			<GoogleMap
				// TODO centering is not working
				center = {props.mapCenter}
				defaultCenter = {{lat:  60.420913, lng: 22.28863}}
				defaultZoom = {11}
				defaultOptions = {{ styles: mapStyles }}
				ref = {map => map && map.fitBounds(bounds)}
			>
				{markers}
			</GoogleMap>
		);
	})
);

export default Map;
