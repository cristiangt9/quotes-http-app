// unificar los reducers

import { combineReducers } from "redux";
import reducerQuote from "./quotes.reducer";

const reducers = combineReducers({quotes: reducerQuote});

export default reducers;