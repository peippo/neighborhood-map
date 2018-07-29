import React, { Component } from 'react';
import Header from './Header';
import TemperatureMeter from './TemperatureMeter';
import LocationList from './LocationList';

export class Sidebar extends Component {
	render() {
		return (
			<section className = "sidebar">
				<Header />
				<TemperatureMeter
					temperature={this.props.temperature}
				/>
				<LocationList
					locations = {this.props.locations}
					currentFilter = {this.props.currentFilter}
					onFilterChange = {this.props.onFilterChange}
					onLocationSelection = {this.props.onLocationSelection}
					toggleLocationsList = {this.props.toggleLocationsList}
					locationsListVisible = {this.props.locationsListVisible}
					selectedLocation = {this.props.selectedLocation}
				/>
			</section>
		);
	}
}

export default Sidebar;
