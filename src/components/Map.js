import React, {Component} from 'react';
import MapView from 'react-native-maps';
import {StyleSheet, View} from 'react-native';
import axios from 'axios';
import Marker from './Marker';


class Map extends Component {
	constructor () {
		super();
		this.state = {
			region: {
				latitude: 40.76,
				longitude: -73.98,
				latitudeDelta: 0.09,
				longitudeDelta: 0.0421,
			},
			stations: []
		}
	}

	render () {
		return (
			<View style={styles.container}>
				<MapView region={this.state.region} style={styles.map}>
					{this.state.stations.map(station=> (
						<Marker stationInfo={station} key={station.station_id}/>
					))}
				</MapView>
			</View>
		)
	}

	componentWillMount() {
		axios.get('https://gbfs.citibikenyc.com/gbfs/en/station_information.json')
			.then(response=> {
				response.data.data.stations.map(station=>station.latlng={latitude: station.lat, longitude: station.lon});
				const stations = response.data.data.stations.filter(station=>station.name.indexOf('Coming Soon')<0);
				this.setState({stations: stations});
			})
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	map: {
		flex: 1
	}
});

export default Map
