import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Chart from 'react-native-chart';
// import * as firebase from 'firebase';
// const firebaseConfig = require('../../env/firebase.json');
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// import { connect } from 'react-redux';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	chart: {
		width: 250,
		height: 300,
		backgroundColor: 'grey',
	},
});

//do this but better to the snapshot
function doForIn (data) {
	let result = [];
	for (let key in data) {
		if (data.hasOwnProperty(key))
			result.push([+key, data[key]['bikes']]);
	}
	return result;
}

//this does a query
// this.dataBae = firebaseApp.database();
// if (this.props.station) {
// 	this.dataBae.ref(/someSationId/someDay).once('value')
// 		.then(snapshot => {
// 			this.setState({bikesData: doForIn(snapshot.val())})
// 		});
// }


export default class SimpleChart extends Component {
	constructor (props) {
		super(props);
		this.state = {bikesData: [[0, 1], [1, 3], [3, 7], [4, 9]]};
	}

	render () {
		return (
			<View style={styles.container}>
				<Chart
					style={styles.chart}
					data={this.state.bikesData}
					verticalGridStep={6}
					type="line"
					showDataPoint={true}
				/>
			</View>
		);
	}
}