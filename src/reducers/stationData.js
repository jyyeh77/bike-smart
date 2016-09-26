const initialState = {};
export default (state=initialState, action) => {
	switch(action.type) {
		case 'get_StationData':
			return Object.assign({}, action.payload);
		default:
			return state;
	}
}
