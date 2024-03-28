import { createStore } from "redux";
import counterReducer from "./reducer/counterReducer.js";

const store = createStore(counterReducer);

export default store;

// STEP 2
//  store.dispatch({type: "INCREASE", value: 10}) 
//  store.dispatch({type: "DECREASE"}) 
// => this will move to store 
// in here store call counterReducer() function

// store have the current value of state
// counterReducer(state, action) 
// action = {type: "INCREASE", value: 10}
// action = {type: "DECREASE"}


