import store from './redux/store.js'
import { increase, decrease, reset } from './redux/actions/counterActions.js'

// getState() is a method that returns the current state value of the Redux store 
// dispatch() hepls you to call an action

console.log(store.getState())
store.dispatch(increase(1))
console.log(store.getState())
store.dispatch(increase(10)) // happens 
console.log("after 10 increatment")
console.log(store.getState())


// increase(1) => below the action creator for INCREASE action
// export function increase(value=1){
//     return {
//         type:INCREASE,
//         value: value
//     }
// }

// increase(1) in here we can pass the arguments and mention in the parameter of action creator


// STEP 1

//  store.dispatch({type: "INCREASE", value: 10}) 
//  store.dispatch({type: "DECREASE"}) 
// => this will move to store 


