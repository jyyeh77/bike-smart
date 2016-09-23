import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, children}) => {
	const { buttonStyle, textStyle } = styles;
	return (
		<TouchableOpacity style={buttonStyle} onPress={onPress}>
			<Text style={textStyle}>{children}</Text>
		</TouchableOpacity>
	);
};

const styles = {
	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 0,
		marginRight: 0,
	},
	textStyle: {
		alignSelf: 'flex-start',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingLeft: 10,
		paddingTop: 10,
		paddingBottom: 10
	}
};

export default Button