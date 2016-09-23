import React, { Component } from 'react';
import {View} from 'react-native';
import Button from './Button';

export default class Footer extends Component {
	render() {
		return (
			<View style={styles.viewStyle}>
				<Button onPress={()=>console.log('Start')}>
					Start
				</Button>
				<Button onPress={()=>console.log('End')}>
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
		position: 'absolute',
		top: 600,
		left: 0,
		right: 0,
		bottom: 0,
	}
};

