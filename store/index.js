import { createStore } from 'redux'
//Update in counter 9 -- import combineReducers to combine all reducers
import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Patients from './reducers/patients';
// import decrementCounter from './reducers/decrementCounter';

//Update in counter 13 -- call applyMiddleware
const middleware = applyMiddleware(thunk);


//Update in counter 9 -- this will combine all reducers in one
export const rootReducer = combineReducers({
    Patients,
    // decrementCounter
// more reducers go here
})

//Update in counter 9 -- passing root reducer
//Update in counter 13 -- pass middleware in createStore
let store = createStore(
  rootReducer,
  middleware
)

store.subscribe(() =>
  console.log(store.getState(),"in store")
);

export default store;
