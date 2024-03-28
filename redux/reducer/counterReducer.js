import { INCREASE,DECREASE,RESET } from './../actions/actionTypes.js';
// logic for counterActions

// give initial value for state

const initialState = 0;

function counterReducer(state=initialState, action){
    switch(action.type){
        case INCREASE: return state+action.value;
        case DECREASE: return state -1;
        case RESET: return initialState;
        default: return state;
    }
}

export default counterReducer;

// STEP 3   
//  store.dispatch({type: "INCREASE", value: 10}) 
//  store.dispatch({type: "DECREASE"}) 

// => this will move to store 
// in here store call counterReducer() function

// store have the current value of state
// counterReducer(state, action)    OR  counterReducer(state , {type: "INCREASE", value: 10})
// action = {type: "INCREASE", value: 10}
// action = {type: "DECREASE"}

// in here counterReducer function return the value according to the switch statement