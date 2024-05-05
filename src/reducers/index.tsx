import { combineReducers } from 'redux';
import  NewsReducer from './NewsReducer';
const rootReducer = combineReducers({
  NewsReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;