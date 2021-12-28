import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './reducers/root.reducer'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'
// state - состояние приложения

const initialState = {
  posts: [], // slice
  user: {} // slice
}

// store
export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)))
