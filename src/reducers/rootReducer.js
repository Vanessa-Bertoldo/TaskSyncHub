import { combineReducers } from 'redux';
import dialogUpdateReducer from "../slices/sliceDialogUpdate"
import authReducer from "../slices/sliceAuth"
import registerReducer from "../slices/sliceRegister"

const rootReducer = combineReducers({
    dialogUpdate:           dialogUpdateReducer,
    auth:                   authReducer,
    register:               registerReducer
});

export default rootReducer;