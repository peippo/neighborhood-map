import React, { Component } from 'react';

export class Logo extends Component {
	render() {
		return (
			<h1 className="logo">
				<span className="logo__top">Swimming</span>
				<span className="logo__middle">in</span>
				<span className="logo__bottom">Turku</span>
			</h1>
		);
	}
}

export default Logo;