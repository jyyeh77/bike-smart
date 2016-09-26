import React, { Component } from 'react';
import { Dimensions, StyleSheet, ScrollView, View, Image, Text} from 'react-native';
import SimpleChart from './Chart';
const window = Dimensions.get('window');
import {connect} from 'react-redux';
import * as actions from '../actions';

const styles = StyleSheet.create({
	menu: {
		flex: 1,
		width: window.width,
		height: window.height,
		backgroundColor: 'gray',
		padding: 0
	}
});

class Menu extends Component {
	constructor(props) {
		super(props)
		this.state = {start: '', end: '', bikes: '', docks: ''};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.startStation) {
			const {startStation} = nextProps;
			console.log("WE GOT START", nextProps.startStation);
			this.setState({start: startStation });
		}
		if (nextProps.endStation) {
			const {endStation} = nextProps;
			console.log("WE GOT END!", nextProps.endStation);
			this.setState({end: endStation});
		}
	}

	render () {
		return (
			<View style={{flex: 1, top: 20}}>
				<SimpleChart title={this.state.start} />
				<SimpleChart title={this.state.end} />
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
export default connect(mapStateToProps, actions)(Menu);



