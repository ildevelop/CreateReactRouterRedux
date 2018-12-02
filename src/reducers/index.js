import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import mainReducer from './trackReducer'
const mystore =createStore(combineReducers({mainReducer}), composeWithDevTools(applyMiddleware(thunk)));
export default mystore
