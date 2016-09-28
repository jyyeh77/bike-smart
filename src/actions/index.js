import * as firebase from 'firebase';
const firebaseConfig = require('../../env/firebase.json');
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const selectStart = (station) => {
	return {
		type: 'set_startStation',
		payload: station
	}
};

export const lockStart = () => {
	return {
		type: 'lock_startStation',
		payload: true
	}
};

export const unlockStart = () => {
	return {
		type: 'unlock_startStation',
		payload: false
	}
};

export const selectEnd = (station) => {
	return {
		type: 'set_endStation',
		payload: station
	}
};

export const lockEnd = () => {
	return {
		type: 'lock_endStation',
		payload: true
	}
};

export const unlockEnd = () => {
	return {
		type: 'unlock_endStation',
		payload: false
	}
};

export const sendStations = (bikeStations) => {
	return {
		type: 'get_StationData',
		payload: bikeStations
	}
}


export function fetchStations () {
	return function(dispatch) {
		return getData()
			.then(snapshot => {
				dispatch(sendStations(snapshot.val()))
			})
	}
}

function getData () {
	return firebaseApp.database().ref().once('value');
}