import React, {Component} from 'react';
import MapView from 'react-native-maps';
import {Text, StyleSheet} from 'react-native';
import axios from 'axios';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Marker extends Component {
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
		const {station} = this.props;
		const {latlng, name, capacity} = station;
		return (
			<MapView.Marker
				coordinate={latlng}
				title={name}
				description={`Capacity: ${capacity}`}
				onSelect={() => this.onSelect(station)}
				pinColor={this.state.pinColor}
			>
				<MapView.Callout style={styles.plainView}>
					<Text>{this.state.calloutText}</Text>
				</MapView.Callout>
			</MapView.Marker>
		)
	}

	onSelect (station) {
		if (this.props.startLocked) {
			if(!this.props.endLocked){
				this.props.selectEnd(station);
				this.setState({pinColor: this.pinColors.end});
			}
		} else {
			this.props.selectStart(station);
			this.setState({pinColor: this.pinColors.start});
		}
		axios.get('https://gbfs.citibikenyc.com/gbfs/en/station_status.json')
			.then(response => {
				const { num_bikes_available, num_docks_available } = response.data.data.stations.filter(station => station.station_id === station.station_id)[0];
				this.setState({bikes: num_bikes_available, docks: num_docks_available});
				this.setState({calloutText: `At ${this.props.station.name}, there are ${this.state.bikes} bikes and ${this.state.docks} docks available`});
			})
	}
}

const styles = StyleSheet.create({
	plainView: {
		width: 250,
		justifyContent: 'center'
	}
});

const mapStateToProps = (state, ownProps) => {
	let isStartStation, isEndStation;
	if(state.startStation)
		isStartStation = state.startStation.id === ownProps.station.id;
	if(state.endStation)
		isEndStation = state.endStation.id === ownProps.station.id;
	return {isStartStation, isEndStation, startLocked: state.startLocked, endLocked: state.endLocked};
};

export default connect(mapStateToProps, actions)(Marker);