import { ADD_POST, DELETE_POST, GET_ALL_POSTS, TOGGLE_FAVORITE } from '../types/post.types'
import {addPostToServer} from '../utils/post.utils'

export const getAllPosts = (posts) => ({
  type: GET_ALL_POSTS,
  payload: {
    posts
  }
})

export const addPost = (data) => async (dispatch) => {
  try {

    const newPost = await addPostToServer(data)

    dispatch({
      type: ADD_POST,
      payload: {
        newPost
      }
    })
  } catch (err) {
    
    console.log(err);
  }
}

export const toggleFavorite = (post) => ({
  type: TOGGLE_FAVORITE,
  payload: {
    post
  }
})

export const deletePost = (id) => ({
  type: DELETE_POST,
  payload: {
    id
  }
})
