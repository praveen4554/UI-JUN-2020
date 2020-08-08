
const initialState = {
    userName: 'Guest'
};
// reucer logic
export const myReducer = (state=initialState, action) =>{
    console.log(action);
    const newState = {...state}
    if(action.type === "changeUser"){
        newState.userName = action.value;
    }
    return newState;
}