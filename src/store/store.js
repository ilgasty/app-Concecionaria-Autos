import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../components/reducers/authReducr";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const reducers=combineReducers({
  aut:authReducer
});

export const store=createStore(reducers,composeEnhancers(applyMiddleware(thunk)));