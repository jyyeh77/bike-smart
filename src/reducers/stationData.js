const initialState = {};
export default (state=initialState, action) => {
	switch(action.type) {
		case 'get_StationData':
			console.log("GETTING DATA IN REDUCER");
			return Object.assign({}, action.payload);
		default:
			return state;
	}
}
