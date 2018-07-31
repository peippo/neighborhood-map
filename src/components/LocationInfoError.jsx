import React, { Component } from 'react';

class LocationInfoError extends Component {
	render() {
		return (
			<div className="error">
				<span className="error__icon">:(</span>
				<span className="error__message">Error fetching data, try again later </span>
			</div>
		);
	}
}

export default LocationInfoError;
