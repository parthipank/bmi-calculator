import BmiReducer from './BmiReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  bmi: BmiReducer,
});

export default rootReducer;
