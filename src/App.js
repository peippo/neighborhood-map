import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import MapContainer from './components/MapContainer';
import './styles/styles.css';

const locationList = require("./locationList.json");

class App extends Component {
	state = {
		currentFilter: 'all',
		temperature: null,
		locationsListVisible: false,
		selectedLocation: {},
		locations: locationList
	}

	getTemperature = () => {
		fetch('http://api.openweathermap.org/data/2.5/weather?id=633679&units=metric&APPID=YOUR-API-KEY-HERE')
		.then(response => response.json())
		.then(response => this.updateTemperature(response.main.temp))
		.catch(error => console.error(error));
	}

	updateTemperature = (temp) => {
		this.setState({
			temperature: Math.round(temp)
		})
	}

	onFilterChange = (filterType) => {
		this.setState({
			currentFilter: filterType
		})

		// Clear active location selection if the type does not match the selected filter type
		if (filterType !== 'all' && filterType !== this.state.selectedLocation.type) {
			this.setState({
				selectedLocation: {}
			})
		}
	}

	onLocationSelection = (selectedName) => {
		// Find selected location from locations array based on the name property on the clicked marker or list item
		// TODO: Change comparison from name property to an id property?
		const newSelectedLocation = this.state.locations.filter(location => location.name === selectedName)

		// If new selection is not the current selection, change selected location, otherwise clear it
		if (this.state.selectedLocation.name !== newSelectedLocation[0].name) {
			this.setState({
				selectedLocation: newSelectedLocation[0]
			})
		} else {
			this.setState({
				selectedLocation: {}
			})
		}
	}

	toggleLocationsList = () => {
		this.setState({
			locationsListVisible: this.state.locationsListVisible ? false : true
		})
	}

	componentDidMount = () => {
		if (this.state.temperature === null) {
			this.getTemperature();
		}
	}

	render() {
		return (
			<React.Fragment>
				<Sidebar
					locations = {this.state.locations}
					currentFilter = {this.state.currentFilter}
					temperature = {this.state.temperature}
					onFilterChange = {this.onFilterChange}
					onLocationSelection = {this.onLocationSelection}
					toggleLocationsList = {this.toggleLocationsList}
					locationsListVisible = {this.state.locationsListVisible}
					selectedLocation = {this.state.selectedLocation}
				/>
				<MapContainer
					onLocationSelection = {this.onLocationSelection}
					locations = {this.state.locations}
					currentFilter = {this.state.currentFilter}
					selectedLocation = {this.state.selectedLocation}
				/>
			</React.Fragment>
		);
	}
}

export default App;
