import React, { Component } from 'react';

class MapError extends Component {
	state = {
		hasError: false
	};

	componentDidCatch() {
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className="error__container">
					<div className="error error--google error--google--active">
						<span className="error__icon">:(</span>
						<span className="error__message">Error displaying map, try again later </span>
					</div>
				</div>
			);
		}

		return this.props.children;
	}
}

export default MapError;