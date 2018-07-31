import React, { Component } from 'react';

export class TemperatureMeter extends Component {
	render() {

		const currentTemperature = this.props.temperature ? this.props.temperature : '??';

		let temperatureLevel = 'error';

		if (currentTemperature >= 28) {
			temperatureLevel = 'thirty'
		} else if (currentTemperature > 25) {
			temperatureLevel = 'twentyfive'
		} else if (currentTemperature > 18) {
			temperatureLevel = 'twenty'
		} else if (currentTemperature > 15) {
			temperatureLevel = 'fifteen'
		} else if (currentTemperature > 10) {
			temperatureLevel = 'ten'
		} else if (currentTemperature >= 0) {
			temperatureLevel = 'zero'
		} else if (currentTemperature < 0) {
			temperatureLevel = 'frozen'
		};

		return (
			<div className={`temperature temperature--${temperatureLevel}`} aria-label="Current temperature in Turku">
				<span className="temperature__value">{currentTemperature}&deg;C</span>
			</div>
		);
	}
}

export default TemperatureMeter;
