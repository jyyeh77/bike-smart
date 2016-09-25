/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';
import * as firebase from 'firebase';
import ContentView from './src/components/ContentView';


const firebaseConfig = require('./env/firebase.json');
const firebaseApp = firebase.initializeApp(firebaseConfig);

class BikeSmart extends Component {
	render () {
		return (
			<View style={{flex: 1}}>
				<ContentView/>
			</View>
		)
	}
}

AppRegistry.registerComponent('BikeSmart', () => BikeSmart);
