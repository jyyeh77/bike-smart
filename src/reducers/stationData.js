export default (state=null, action) => {
	switch(action.type) {
		case 'send_stationData':
			return action.payload;
		default:
			return state;
	}
}
