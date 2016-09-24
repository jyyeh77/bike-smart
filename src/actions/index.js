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