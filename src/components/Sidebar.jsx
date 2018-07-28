import React, { Component } from 'react';
import Header from './Header';
import LocationList from './LocationList';

export class Sidebar extends Component {
	render() {
		return (
			<section className = "sidebar">
				<Header />
				<LocationList
					locations = {this.props.locations}
					currentFilter = {this.props.currentFilter}
					onFilterChange = {this.props.onFilterChange}
				/>
			</section>
		);
	}
}

export default Sidebar;
