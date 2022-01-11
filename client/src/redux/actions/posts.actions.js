import axios from 'axios'
import { ADD_POST, DELETE_POST, EDIT_POST, GET_ALL_POSTS, TOGGLE_FAVORITE, CHANGE_STATUS } from '../types/post.types'
// import {addNewPost} from '../utils/post.utils'
import {addPostToServer, editPostToServer, changeStatusToServer} from '../utils/post.utils'

// получить все посты
export const getAllPosts = (posts) => ({
  type: GET_ALL_POSTS,
  payload: {
    posts
  }
})

// добавить пост
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
// export const addNewPost = (dataFromForm) => async (dispatch) => {
//   const response = await axios.post('http://localhost:3001/note/new', dataFromForm)
//   const newPost = response.data
//   dispatch(addPost(newPost))
// }

// редактирование
export const editPost = (id) => async(dispatch) => {
  try {
    const reductPost = await editPostToServer(id)
    dispatch({
      type: EDIT_POST,
      payload: {
        reductPost
      }
    })
  } catch (err) {
    
    console.log(err);
  }
}

// изменить статус
export const changeStatus = (id) => async(dispatch) => {
  try {
    const statusPost = await changeStatusToServer(id)
    dispatch({
      type: CHANGE_STATUS,
      payload: {
        statusPost
      }
    })
  } catch (err) {
    
    console.log(err);
  }
}

// удаление 
export const deletePost = (id) => ({
  type: DELETE_POST,
  payload: {
    id
  }
})

// нравиться/не нравиться
export const toggleFavorite = (post) => ({
  type: TOGGLE_FAVORITE,
  payload: {
    post
  }
})
