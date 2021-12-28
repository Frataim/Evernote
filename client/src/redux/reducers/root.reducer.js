import { combineReducers } from 'redux'
import { postsReducer } from './posts.reducer'
import { userReducer } from './user.reducer'

export const rootReducer = combineReducers({
  posts: postsReducer,
  user: userReducer
})
