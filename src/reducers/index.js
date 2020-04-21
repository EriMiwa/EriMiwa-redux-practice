import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibirlityFilter';

export default combineReducers({
  todos,
  visibilityFilter
})