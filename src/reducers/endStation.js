export default (state=null, action) => {
	switch(action.type) {
		case 'set_endStation':
			return action.payload;
		default:
			return state;
	}
}