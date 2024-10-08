import {combineReducers} from 'redux';
import settingsSlice from './slices/settingsSlice';

const rootReducer = combineReducers({
    [settingsSlice.name]: settingsSlice.reducer,
});

export default rootReducer;
