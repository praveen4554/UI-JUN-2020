 const { createStore } = require('redux')
//import { createStore} from 'redux';

const initialState = {
    userName: 'Guest'
};
// reucer logic
const myReducer = (state=initialState, action) =>{
    const newState = {...state}
    if(action.type === "changeUser"){
        newState.userName = action.value;
    }
    return newState;
}
// creating the store
const store = createStore(myReducer);
// listening to the state changes
store.subscribe(()=>{
    console.log('subscribtion', store.getState());
})
// actions
store.dispatch({type:'changeUser', value:'praveen'});
store.dispatch({type:'changeUser', value:'praveen1'});
store.dispatch({type:'changeUser', value:'praveen2'});
store.dispatch({type:'changeUser', value:'praveen3'});
