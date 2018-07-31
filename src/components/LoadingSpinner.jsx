import React, { Component } from 'react';

class LoadingSpinner extends Component {
	render() {
		return (
			<div className="spinner">
				<div className="spinner__animation"><div></div><div></div><div></div><div></div></div>
			</div>
		);
	}
}

export default LoadingSpinner;
