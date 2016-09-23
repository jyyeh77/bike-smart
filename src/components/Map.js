import React, {Component} from 'react';
import MapView from 'react-native-maps';
import {StyleSheet, View} from 'react-native';

class Map extends Component {
	constructor () {
		super();
		this.state = {
			region: {
				latitude: 37.78825,
				longitude: -122.4324,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
			}
		}
	}

	render () {
		return (
			<View style={styles.container}>
				<MapView region={this.state.region} style={styles.map}/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
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
