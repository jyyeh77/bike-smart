import React, {Component} from 'react';
import {View} from 'react-native';
import Map from './Map';
import Header from './Header';
import Footer from './Footer';

export default class ContentView extends Component {
	render () {
		return (
			<View style={{flex: 1}}>
				<Header headerText={'BikeSmart™'} style={{flex: 1}}/>
				<Map style={{flex: 1}}/>
				<Footer style={{flex: 1}}/>
			</View>
		)
	}
}