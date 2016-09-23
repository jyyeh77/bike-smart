import React, { Component } from 'react';
import {View} from 'react-native';
import Button from './Button';

export default class Footer extends Component {
	constructor (props){
		super(props);
	}

	render() {
		return (
			<View style={styles.viewStyle}>
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

const styles = {
	textStyle: {
		fontSize: 20
	},
	viewStyle: {
		justifyContent: 'space-around',
		position: 'absolute',
		top: 600,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: '#FFF'
	}
};

