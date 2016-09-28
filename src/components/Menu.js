import React, {Component} from 'react';
import {Dimensions, StyleSheet, ScrollView, View, Image, Text} from 'react-native';
import SimpleChart from './Chart';
const window = Dimensions.get('window');
import {connect} from 'react-redux';
import * as actions from '../actions';
var moment = require('moment');

const styles = StyleSheet.create({
	menu: {
		flex: 1,
		width: window.width,
		height: window.height,
		backgroundColor: 'gray',
		padding: 0
	}
});

function getBikes(data) {
	let result = [];
	for (let key in data) {
		if (data.hasOwnProperty(key))
			result.push([+key, data[key]['bikes']]);
	}
	return result;
}

function getDocks(data) {
	let result = [];
	for (let key in data) {
		if (data.hasOwnProperty(key))
			result.push([+key, data[key]['docks']]);
	}
	return result;
}

class Menu extends Component {
	constructor(props) {
		super(props)
		this.state = {start: '', end: '', bikes: '', docks: ''};
	}

	componentWillReceiveProps(nextProps) {
		const {startStation, endStation, allStations} = nextProps;
		if (nextProps.startStation) {
			// const {startStation, allStations} = nextProps;
			// console.log("WE GOT START", nextProps.startStation);
			var now = moment().format('dddd')
			if (allStations[startStation.id][now]) {
				// console.log(getBikes(allStations[startStation.id][now]));
				this.setState({
					start: startStation,
					bikes: getBikes(allStations[startStation.id][now])
				});
			}
		}
		if (nextProps.endStation) {
			// const {endStation, allStations} = nextProps;
			var otherNow = moment().format('dddd');
			console.log(getDocks(allStations[endStation.id][now]));
			// let docks = getDocks(allStations[endStation.id][now]));
			this.setState({
				end: endStation,
				docks: getDocks(allStations[endStation.id][now])
			})
		}
	}

	render() {
		return (
			<View style={{flex: 1, top: 20}}>
				<Text style={{color: 'blue', textAlign: 'center'}}>Bike Profile Last {moment().format('dddd')}</Text>
				<SimpleChart title={this.state.start} data={this.state.bikes}/>
				<Text style={{color: 'blue', textAlign: 'center'}}>Dock Profile Last {moment().format('dddd')}</Text>
				<SimpleChart title={this.state.end} data={this.state.docks}/>
			</View>
		);
	}
}

const mapStateToProps = state => {
	let startStation, endStation, allStations;
	return {
		startStation: state.startStation,
		endStation: state.endStation,
		allStations: state.stationData
	};
}
//
export default connect(mapStateToProps, actions)(Menu);



