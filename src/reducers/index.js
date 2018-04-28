import { combineReducers } from 'redux';
// import nav from './nav';
import search from './search';
import user from './user';
import portfolio from './portfolios';

const AppReducer = combineReducers({
  // nav,
  user,
  portfolios,
  search
});

export default AppReducer;