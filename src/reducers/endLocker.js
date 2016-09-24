export default (state=true, action) => {
	switch(action.type) {
		case 'lock_endStation':
		case 'unlock_endStation':
			return action.payload;
		default:
			return state;
	}
}