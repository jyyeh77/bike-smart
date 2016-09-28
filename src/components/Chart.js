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

class SimpleChart extends Component {
	constructor (props) {
		super(props);
		this.state = {data: [[0, 0], [0,0], [0,0], [0,0]],
			title: 'Select Station to View History'};
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.title !== nextProps.title) {
			this.setState({title: nextProps.title.name, data: nextProps.data})
		}
	}

	render () {
		return (
			<View style={styles.container}>
				<Text>{this.state.title}</Text>
				<Chart
					style={styles.chart}
					data={this.state.data}
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

const mapStateToProps = state => {
	let startStation, endStation, allStations;
	return {startStation: state.startStation,
					endStation: state.endStation,
					allStations: state.stationData
	};
}
//
export default connect(mapStateToProps, actions)(SimpleChart);




