import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default class Button extends Component {
	handlePress (e) {
		if (this.props.onPress) {
			this.props.onPress(e);
		}
	}

	render () {
		return (
			<TouchableOpacity
				onPress={this.handlePress.bind(this)}
				style={styles.button}>
				<Text>{this.props.children}</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		position: 'absolute',
		top: 15,
		padding: 10,
	}
});
