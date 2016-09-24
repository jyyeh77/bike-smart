export default (state=null, action) => {
	switch(action.type) {
		case 'set_startStation':
			return action.payload;
		default:
			return state;
	}
}