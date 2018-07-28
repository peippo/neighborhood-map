import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import LocationMarker from './LocationMarker';

const Map = withScriptjs(
	withGoogleMap(props => {
		const markers = props.locations
		.filter(location => props.currentFilter === 'all' || location.type === props.currentFilter)
		.map(location => (
			<LocationMarker
				key = {location.name}
				position = {{lat: location.latitude, lng: location.longitude}}
			/>
		));

		return (
			<GoogleMap
				defaultZoom = {11}
				defaultCenter = {{lat:  60.420913, lng: 22.28863}}
			>
				{markers}
			</GoogleMap>
		);
	})
);

export default Map;
