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
				<Button onPress={()=>console.log('test')}>
					Start
				</Button>
				<Button onPress={()=>console.log('test')}>
					End
				</Button>
			</View>
		)
	}
}
