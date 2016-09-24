export default (state=false, action) => {
	switch(action.type) {
		case 'lock_startStation':
		case 'unlock_startStation':
			return action.payload;
		default:
			return state;
	}
}