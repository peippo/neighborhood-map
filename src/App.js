import React, { Component } from 'react';
import Map from './components/map'
import './styles/styles.css';

class App extends Component {
	state = {
		locations: [
				{
					"name": "Ekvallan uimaranta",
					"latitude": 60.379258,
					"longitude": 22.2255376
				},
				{
					"name": "Ispoisten uimaranta",
					"latitude": 60.4144203,
					"longitude": 22.2571506
				},
				{
					"name": "Saaronniemen uimaranta",
					"latitude": 60.4217679,
					"longitude": 22.0907459
				},
				{
					"name": "Sorttamäen uimaranta",
					"latitude": 60.4087123,
					"longitude": 22.2539155
				},
				{
					"name": "Ristikallion uimaranta",
					"latitude": 60.4470319,
					"longitude": 22.395566
				},
				{
					"name": "Littoisten uimaranta",
					"latitude": 60.4583366,
					"longitude": 22.3748857
				},
				{
					"name": "Järvelän uimaranta",
					"latitude": 60.4590244,
					"longitude": 22.3853198
				},
				{
					"name": "Ruskon uimaranta",
					"latitude": 60.5219548,
					"longitude": 22.2205587
				},
				{
					"name": "Kuuslahden uimaranta",
					"latitude": 60.3861495,
					"longitude": 22.3333665
				},
				{
					"name": "Hovirinnan uimaranta",
					"latitude": 60.3958349,
					"longitude": 22.3762966
				},
				{
					"name": "Voivalan uimaranta",
					"latitude": 60.4041779,
					"longitude": 22.412202
				},
				{
					"name": "Brinkhallin uimaranta",
					"latitude": 60.365564,
					"longitude": 22.2331042
				},
				{
					"name": "Maarian uimaranta",
					"latitude": 60.5250989,
					"longitude": 22.3443163
				},
				{
					"name": "Kailonsaaren uimaranta",
					"latitude": 60.4740662,
					"longitude": 21.9349003
				},
				{
					"name": "Hessundin uimaranta",
					"latitude": 60.3235351,
					"longitude": 22.3439679
				},
				{
					"name": "Norrbyn uimaranta",
					"latitude": 60.3168093,
					"longitude": 22.2971989
				},
				{
					"name": "Bläsnäsin uimaranta",
					"latitude": 60.3133675,
					"longitude": 22.2934745
				},
				{
					"name": "Harvaluoto uimaranta",
					"latitude": 60.3714259,
					"longitude": 22.5106078
				},
				{
					"name": "Porhonkallion uimaranta",
					"latitude": 60.4587154,
					"longitude": 21.9321632
				},
				{
					"name": "Lielahden uimaranta",
					"latitude": 60.3035573,
					"longitude": 22.4149616
				},
				{
					"name": "Kuurnanpään uimaranta",
					"latitude": 60.5356011,
					"longitude": 21.9418357
				}
			]
	}

	render() {
		return (
			<Map
				locations = {this.state.locations}
			/>
		);
	}
}

export default App;
