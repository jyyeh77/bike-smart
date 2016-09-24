import React, { Component } from 'react';
import {View} from 'react-native';
import Button from './Button';

export default class Footer extends Component {
	constructor (props){
		super(props);
	}

	render() {
		return (
			<View>
				<Button onPress={()=>this.props.lockStart()}>
					{this.props.stations.startStation.name}
				</Button>
				<Button onPress={()=>this.props.unlockStart()}>
					{this.props.stations.endStation.name}
				</Button>
			</View>
		)
	}
}
