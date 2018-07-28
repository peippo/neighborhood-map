import React, { Component } from 'react';
import MapContainer from './components/MapContainer';
import LocationList from './components/LocationList';

import './styles/styles.css';

class App extends Component {
	state = {
		currentFilter: 'all',
		locations: [
				{
					"name": "Ekvallan uimaranta",
					"shortName": "Ekvalla",
					"type": "ocean",
					"latitude": 60.379258,
					"longitude": 22.2255376
				},
				{
					"name": "Ispoisten uimaranta",
					"shortName": "Ispoinen",
					"type": "ocean",
					"latitude": 60.4144203,
					"longitude": 22.2571506
				},
				{
					"name": "Saaronniemen uimaranta",
					"shortName": "Saaronniemi",
					"type": "ocean",
					"latitude": 60.4217679,
					"longitude": 22.0907459
				},
				{
					"name": "Sorttamäen uimaranta",
					"shortName": "Sorttamäki",
					"type": "ocean",
					"latitude": 60.4087123,
					"longitude": 22.2539155
				},
				{
					"name": "Ristikallion uimaranta",
					"shortName": "Ristikallio",
					"type": "lake",
					"latitude": 60.4470319,
					"longitude": 22.395566
				},
				{
					"name": "Littoisten uimaranta",
					"shortName": "Littoinen",
					"type": "lake",
					"latitude": 60.4583366,
					"longitude": 22.3748857
				},
				{
					"name": "Järvelän uimaranta",
					"shortName": "Järvelä",
					"type": "lake",
					"latitude": 60.4590244,
					"longitude": 22.3853198
				},
				{
					"name": "Ruskon uimaranta",
					"shortName": "Rusko",
					"type": "lake",
					"latitude": 60.5219548,
					"longitude": 22.2205587
				},
				{
					"name": "Kuuslahden uimaranta",
					"shortName": "Kuuslahti",
					"type": "ocean",
					"latitude": 60.3861495,
					"longitude": 22.3333665
				},
				{
					"name": "Hovirinnan uimaranta",
					"shortName": "Hovirinta",
					"type": "ocean",
					"latitude": 60.3958349,
					"longitude": 22.3762966
				},
				{
					"name": "Voivalan uimaranta",
					"shortName": "Voivala",
					"type": "ocean",
					"latitude": 60.4041779,
					"longitude": 22.412202
				},
				{
					"name": "Brinkhallin uimaranta",
					"shortName": "Brinkhalli",
					"type": "lake",
					"latitude": 60.365564,
					"longitude": 22.2331042
				},
				{
					"name": "Maarian uimaranta",
					"shortName": "Maaria",
					"type": "lake",
					"latitude": 60.5250989,
					"longitude": 22.3443163
				},
				{
					"name": "Kailonsaaren uimaranta",
					"shortName": "Kailonsaari",
					"type": "ocean",
					"latitude": 60.4740662,
					"longitude": 21.9349003
				},
				{
					"name": "Hessundin uimaranta",
					"shortName": "Hessund",
					"type": "ocean",
					"latitude": 60.3235351,
					"longitude": 22.3439679
				},
				{
					"name": "Norrbyn uimaranta",
					"shortName": "Norrby",
					"type": "ocean",
					"latitude": 60.3168093,
					"longitude": 22.2971989
				},
				{
					"name": "Bläsnäsin uimaranta",
					"shortName": "Bläsnäs",
					"type": "ocean",
					"latitude": 60.3133675,
					"longitude": 22.2934745
				},
				{
					"name": "Harvaluoto uimaranta",
					"shortName": "Harvaluoto",
					"type": "ocean",
					"latitude": 60.3714259,
					"longitude": 22.5106078
				},
				{
					"name": "Porhonkallion uimaranta",
					"shortName": "Porhonkallio",
					"type": "ocean",
					"latitude": 60.4587154,
					"longitude": 21.9321632
				},
				{
					"name": "Lielahden uimaranta",
					"shortName": "Lielahti",
					"type": "ocean",
					"latitude": 60.3035573,
					"longitude": 22.4149616
				},
				{
					"name": "Kuurnanpään uimaranta",
					"shortName": "Kuurnanpää",
					"type": "ocean",
					"latitude": 60.5356011,
					"longitude": 21.9418357
				}
			]
	}

	onFilterChange = (filterType) => {
		this.setState({
			currentFilter: filterType
		})
	}

	render() {
		return (
			<React.Fragment>
				<LocationList
					locations = {this.state.locations}
					currentFilter = {this.state.currentFilter}
					onFilterChange = {this.onFilterChange}
				/>
				<MapContainer
					locations = {this.state.locations}
					currentFilter = {this.state.currentFilter}
				/>
			</React.Fragment>
		);
	}
}

export default App;
