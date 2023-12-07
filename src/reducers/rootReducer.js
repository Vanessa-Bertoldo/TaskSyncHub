import { combineReducers } from 'redux';
import dialogUpdateReducer from "../slices/sliceDialogUpdate"

const rootReducer = combineReducers({
    dialogUpdate:           dialogUpdateReducer 
});

export default rootReducer;