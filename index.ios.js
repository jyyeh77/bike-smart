/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import Map from './src/components/Map';
import Header from './src/components/Header';
// import Footer from './src/components/Footer';
import * as firebase from 'firebase';

const firebaseConfig = require('./env/firebase.json');
const firebaseApp = firebase.initializeApp(firebaseConfig);

class BikeSmart extends Component {
	render () {
		return (
			<View style={{flex: 1}}>
				<Header headerText={'BikeSmart™'}/>
				<Map/>
			</View>
		)
	}
}

AppRegistry.registerComponent('BikeSmart', () => BikeSmart);
