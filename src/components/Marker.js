import React, {Component} from 'react';
import MapView from 'react-native-maps';
import {Text, StyleSheet} from 'react-native';
import axios from 'axios';

export default class Marker extends Component {
	constructor (props) {
		super(props);
		this.pinColors = {
			default: 'grey',
			start: 'blue',
			end: 'red'
		};
		this.state = {pinColor: this.pinColors.default, calloutText: 'loading...'};
	}

	render () {
		return (
			<MapView.Marker
				coordinate={this.props.stationInfo.latlng}
				title={this.props.stationInfo.name}
				description={`Capacity: ${this.props.stationInfo.capacity}`}
				onSelect={() => this.onSelect(this.props.stationInfo)}
				pinColor={this.state.pinColor}
			>
				<MapView.Callout style={styles.plainView}>
					<Text>{this.state.calloutText}</Text>
				</MapView.Callout>
			</MapView.Marker>
		)
	}

	onSelect (station) {
		(this.props.startLocked) ? this.props.setEnd(station) : this.props.setStart(station);
		axios.get('https://gbfs.citibikenyc.com/gbfs/en/station_status.json')
			.then(response => {
				const bikesAvailable = response.data.data.stations.filter(station => station.station_id === station.station_id)[0].num_bikes_available;
				const docksAvailable = response.data.data.stations.filter(station => station.station_id === station.station_id)[0].num_docks_available;
				(this.props.startLocked) ?  this.setState({bikes: bikesAvailable, docks: docksAvailable, pinColor: this.pinColors.end}) : this.setState({bikes: bikesAvailable, docks: docksAvailable, pinColor: this.pinColors.start});
				this.setState({calloutText: `At ${this.props.stationInfo.name}, there are ${this.state.bikes} bikes and ${this.state.docks} docks available`});
			})
	}
}

const styles = StyleSheet.create({
	plainView: {
		width: 250,
		justifyContent: 'center'
	}
});