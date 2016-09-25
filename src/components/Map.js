import React, {Component} from 'react';
import MapView from 'react-native-maps';
import {StyleSheet, View} from 'react-native';
import Marker from './Marker';
import {connect} from 'react-redux';
import * as firebase from 'firebase';
const firebaseConfig = require('../../env/firebase.json');
const firebaseApp = firebase.initializeApp(firebaseConfig);

class Map extends Component {

	componentDidMount () {
		this.dataBae = firebaseApp.database();
		this.dataBae.ref().once('value')
			.then(snapshot => {
				console.log("GOT DATA: ", snapshot.val());
				this.props.stationData = snapshot.val();
			})
	}

	render () {
		const {stations} = this.props;
		const region = {
			latitude: 40.76,
			longitude: -73.98,
			latitudeDelta: 0.09,
			longitudeDelta: 0.0421,
		};

		return (
			<View style={styles.container}>
				<MapView region={region} style={styles.map}>
					{stations.map(station => (
						<Marker station={station} key={station.id}/>
					))}
				</MapView>
			</View>
		)
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

const mapStateToProps = (state) => {
	return {stations: state.stations}
};

export default connect(mapStateToProps)(Map);