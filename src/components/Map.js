import React, {Component} from 'react';
import MapView from 'react-native-maps';
import {StyleSheet, View} from 'react-native';
import axios from 'axios';

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
			markers: []
		}
	}

	render () {
		return (
			<View style={styles.container}>
				<MapView region={this.state.region} style={styles.map}>
					{this.state.markers.map(marker=> (
						<MapView.Marker
							coordinate={marker.latlng}
							key={marker.station_id}
						  title={marker.name}
						  description={`Capacity: ${marker.capacity}`}
						/>
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
				this.setState({markers: stations});
			})
	}
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 60,
		left: 0,
		right: 0,
		bottom: 0,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	map: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	}
});

export default Map
