import { INCREASE,DECREASE,RESET } from "./actionTypes.js";
// action creator file
// create separate file for each group of actions

// an action will be a OBJECT
// an action creator will be a FUNCTION 

// actions are object
//  {
//     type: INCREASE
//  }

// action creator are functions that return action objects


export function increase(value=1){
    return {
        type:INCREASE,
        value: value
    }
}

export function decrease(){
    return {
        type:DECREASE
    }
}

export function reset(){
    return { type:RESET }
}

