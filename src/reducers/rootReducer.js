import { combineReducers } from 'redux';
import dialogUpdateReducer from "../slices/sliceDialogUpdate"
import authReducer from "../slices/sliceAuth"
import registerReducer from "../slices/sliceRegister"
import screenLoaderReducer from "../slices/sliceScreenLoader"

const rootReducer = combineReducers({
    dialogUpdate:           dialogUpdateReducer,
    auth:                   authReducer,
    register:               registerReducer,
    screenLoader:           screenLoaderReducer
});

export default rootReducer;