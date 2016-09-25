import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {View} from 'react-native';
import Map from './Map';
import Header from './Header';
import Footer from './Footer';
import reducers from '../reducers';

export default class ContentView extends Component {
	render () {
		return (
		<Provider store={createStore(reducers)}>
			<View style={{flex: 1}}>
				<Header headerText={'BikeSmart™'} style={{flex: 1}}/>
				<Map style={{flex: 1}}/>
				<Footer style={{flex: 1}}/>
			</View>
		</Provider>
		)
	}
}