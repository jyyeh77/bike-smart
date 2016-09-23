/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import Map from './src/components/Map';
import * as firebase from 'firebase';

const firebaseConfig = require('./env/firebase.json');
const firebaseApp = firebase.initializeApp(firebaseConfig);

class BikeSmart extends Component {
	render () {
		return (
				<Map/>
		)
	}
}

const
	styles = StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: '#F5FCFF',
		},
		welcome: {
			fontSize: 20,
			textAlign: 'center',
			margin: 10,
		},
		instructions: {
			textAlign: 'center',
			color: '#333333',
			marginBottom: 5,
		},
	});

AppRegistry.registerComponent('BikeSmart', () => BikeSmart);
