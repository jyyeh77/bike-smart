/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';
import App from './src/components/App';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import reducers from './src/reducers';


const createStoreWithMiddleware = applyMiddleware(thunk, logger())(createStore)

class BikeSmart extends Component {
	render () {
		return (
			<View style={{flex: 1}}>
				<Provider store={createStoreWithMiddleware(reducers)}>
					<App/>
				</Provider>
			</View>
		)
	}
}

AppRegistry.registerComponent('BikeSmart', () => BikeSmart);
