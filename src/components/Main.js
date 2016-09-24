import React, {Component} from 'react';
import {View} from 'react-native';
import Map from './Map';
import Header from './Header';
import Footer from './Footer';

export default class Main extends Component {
	constructor () {
		super();
		this.state = {
			startStation: 'startStation',
			endStation: 'endStation',
			startLocked: false,
			endLocked: true
		};
	}

	setStart (station) {
		this.setState({startStation: station});
	}

	setEnd (station) {
		this.setState({endStation: station});
	}

	lockStart(){
		this.setState({startLocked: true, endLocked:false});
	}

	unlockStart(){
		this.setState({startLocked: false, endLocked: true});
	}

	render () {
		return (
			<View style={{flex: 1}}>
				<Header headerText={'BikeSmart™'} style={{flex: 1}}/>
				<Map style={{flex: 1}} setStart={this.setStart.bind(this)} setEnd={this.setEnd.bind(this)} startLocked={this.state.startLocked} endLocked={this.state.endLocked}/>
				<Footer style={{flex: 1}} stations={this.state} lockStart={this.lockStart.bind(this)} unlockStart={this.unlockStart.bind(this)}/>
			</View>
		)
	}
}