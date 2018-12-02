import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import mainReducer from './trackReducer'
const mystore =createStore(mainReducer, composeWithDevTools(applyMiddleware(thunk)));
export default mystore
