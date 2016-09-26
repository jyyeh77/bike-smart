import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Chart from 'react-native-chart';
import {connect} from 'react-redux';
import * as actions from '../actions';
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


class SimpleChart extends Component {
	constructor (props) {
		super(props);
		this.state = {bikesData: [[0, 1], [1, 3], [3, 7], [4, 9]]};
	}

	componentWillReceiveProps(nextProps){
		if (this.props !== nextProps) {
			console.log("CALLING!");
			console.log(nextProps);

		}
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

const mapStateToProps = state => {
	let startStation, allStations;
	return {startStation: state.startStation, allStations: state.stationData};
}
//
export default connect(mapStateToProps, actions)(SimpleChart);

// let self = this;
// this.dataBae = firebaseApp.database();
// this.dataBae.ref().once('value')
// 	.then(snap => {
// 		self.setState({bikesData: [[5, 0], [5,0], [5, 0], [5, 0]]})
// 	})


