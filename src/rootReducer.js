import { combineReducers } from 'redux';
import podReducer from './components/PicOfDay/podReducer';

export default combineReducers({
    pod: podReducer
});
