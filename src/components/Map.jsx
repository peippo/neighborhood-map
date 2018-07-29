import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import LocationMarker from './LocationMarker';

const mapStyles = require("./mapStyles.json");

const Map = withScriptjs(
	withGoogleMap(props => {
		const markers = props.locations
		.filter(location => props.currentFilter === 'all' || location.type === props.currentFilter)
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

		return (
			<GoogleMap
				defaultZoom = {11}
				defaultCenter = {{lat:  60.420913, lng: 22.28863}}
				defaultOptions={{ styles: mapStyles }}
			>
				{markers}
			</GoogleMap>
		);
	})
);

export default Map;
