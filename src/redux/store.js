import  {configureStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
export default store = configureStore( 
    combineReducers({})
    ,
    composeWithDevTools(applyMiddleware(thunk))


)