import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Chart from 'react-native-chart';
import {connect} from 'react-redux';
import * as actions from '../actions';
var moment = require('moment');
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	chart: {
		width: 250,
		height: 250,
		backgroundColor: 'grey',
	},
});

//do this but better to the snapshot, use for station, day queries
function doForIn (data) {
	let result = [];
	for (let key in data) {
		if (data.hasOwnProperty(key))
			result.push([+key, data[key]['bikes']]);
	}
	return result;
}

export default class SimpleChart extends Component {
	constructor (props) {
		super(props);
		this.state = {bikesData: [[0, 1], [1, 3], [3, 7], [4, 9]],
			title: ''};
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.title !== nextProps.title) {
			this.setState({title: nextProps.title.name})
		}
	}

	// componentWillReceiveProps(nextProps){
	// 	if (nextProps.startStation) {
	// 		const { startStation, allStations } = nextProps;
	// 		var now = moment().format('dddd');
	// 		if (allStations[startStation.id][now]) {
	// 			this.setState({bikesData: doForIn(allStations[startStation.id][now]),
	// 				start: startStation.name})
	// 		}
	// 	}
	// 	if (nextProps.endStation) {
	// 		const { endStation, allStations } = nextProps;
	// 		var now = moment().format('dddd');
	// 		if (allStations[endStation.id][now]) {
	// 			this.setState({end: endStation.name});
	// 		}
	// 	}
	// }

	render () {
		return (
			<View style={styles.container}>
				<Text>{this.state.title}</Text>
				<Chart
					style={styles.chart}
					data={this.state.bikesData}
					verticalGridStep={6}
					showXAxisLabels={true}
					showYAxisLabels={true}
					fillColor="#37FDFC"
					type="line"
					showDataPoint={true}
				/>
			</View>
		);
	}
}

// const mapStateToProps = state => {
// 	let startStation, endStation, allStations;
// 	return {startStation: state.startStation,
// 					endStation: state.endStation,
// 					allStations: state.stationData
// 	};
// }
// //
// export default connect(mapStateToProps, actions)(SimpleChart);

// let self = this;
// this.dataBae = firebaseApp.database();
// this.dataBae.ref().once('value')
// 	.then(snap => {
// 		self.setState({bikesData: [[5, 0], [5,0], [5, 0], [5, 0]]})
// 	})

//this does a query
// this.dataBae = firebaseApp.database();
// if (this.props.station) {
// 	this.dataBae.ref(/someSationId/someDay).once('value')
// 		.then(snapshot => {
// 			this.setState({bikesData: doForIn(snapshot.val())})
// 		});
// }


