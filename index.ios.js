/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';
import * as firebase from 'firebase';
import App from './src/components/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers';


const firebaseConfig = require('./env/firebase.json');
const firebaseApp = firebase.initializeApp(firebaseConfig);

class BikeSmart extends Component {
	render () {
		return (
			<View style={{flex: 1}}>
				<Provider store={createStore(reducers)}>
					<App/>
				</Provider>
			</View>
		)
	}
}

AppRegistry.registerComponent('BikeSmart', () => BikeSmart);
