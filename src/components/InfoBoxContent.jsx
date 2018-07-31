import React, { Component } from 'react';

class InfoBoxContent extends Component {
	render() {
		let backgroundImage = 'none';

		if (this.props.locationInfo.bestPhoto) {
			backgroundImage = `${this.props.locationInfo.bestPhoto.prefix}300x300${this.props.locationInfo.bestPhoto.suffix}`
		}

		return (
			<div>
			{this.props.locationInfo &&
				<figure>
					<div className="infoContent__image" style={{backgroundImage: `url(${backgroundImage})`}}></div>
					<div className="infoContent__content">
						<h2 className="infoContent__name">{this.props.locationInfo.name}</h2>
						{this.props.locationInfo.rating &&
							<div className="infoContent__rating">{this.props.locationInfo.rating}</div>
						}

						{this.props.locationInfo.location && this.props.locationInfo.location.address && this.props.locationInfo.location.city &&
							<h3 className="infoContent__location">{this.props.locationInfo.location.address}, {this.props.locationInfo.location.city}</h3>
						}
					</div>
				</figure>
			}
			</div>
		);
	}
}

export default InfoBoxContent;
