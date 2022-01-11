import {ADD_POST, DELETE_POST, GET_ALL_POSTS, TOGGLE_FAVORITE, CHANGE_STATUS} from '../types/post.types'

export const postsReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
    case GET_ALL_POSTS: {
      const {posts} = payload

      return [...state, ...posts]
    }

    case ADD_POST: {
      const { newPost } = payload
      return [...state, newPost]
    }
    case CHANGE_STATUS: {
      return state.map(el => {
        if (el.id === action.payload) {
          return {
            ...el,
            status: !el.status
          }
        }
        return el
      })
    }

    case DELETE_POST: {
      const { id } = payload
      return state.filter(el => el.id !== id)
    }

    case TOGGLE_FAVORITE: {
      const {post} = payload

      return state.map(el => el.id === post.id ? post : el)
    }

    default: {
      return state
    }
  }
}
