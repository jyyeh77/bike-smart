import {combineReducers} from 'redux';
import StationLocationReducer from './stationLocation';
import StartStationReducer from './startStation';
import EndStationReducer from './endStation';
import ToggleStartReducer from './startLocker';
import ToggleEndReducer from './endLocker';
import StationDataReducer from './stationData';


export default combineReducers({
	stations: StationLocationReducer,
	startStation: StartStationReducer,
	endStation: EndStationReducer,
	startLocked: ToggleStartReducer,
	endLocked: ToggleEndReducer,
	stationData: StationDataReducer
})