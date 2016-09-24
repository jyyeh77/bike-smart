import React, {Component} from 'react';
import {View} from 'react-native';
import Button from './Button';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Footer extends Component {
	startLockToggler() {
		if (this.props.startLocked) {
			if (this.props.endLocked)
				this.props.unlockStart();
		} else {
			this.props.lockStart();
			this.props.unlockEnd();
		}
	}

	endLockToggler() {
		if (this.props.endLocked) {
			if (this.props.startLocked)
				this.props.unlockEnd();
		} else {
			this.props.lockEnd();
		}
	}

	render () {
		return (
			<View>
				<Button onPress={() => this.startLockToggler()}>
					Start: {this.props.startStation ? this.props.startStation.name : ''}
				</Button>
				<Button onPress={() => this.endLockToggler()}>
					End: {this.props.endStation ? this.props.endStation.name : ''}
				</Button>
			</View>
		)
	}
}

const mapStateToProps = state => {
	return {
		startStation: state.startStation,
		endStation: state.endStation,
		startLocked: state.startLocked,
		endLocked: state.endLocked
	}
};

export default connect(mapStateToProps, actions)(Footer)