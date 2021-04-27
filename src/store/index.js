// crear el store

import { applyMiddleware, compose, createStore } from "redux";
import reducers from "./reducers";
import thunk from 'redux-thunk';

const composeEnhancers =
	process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
				// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
		  })
		: compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducers,enhancer);

export default store;