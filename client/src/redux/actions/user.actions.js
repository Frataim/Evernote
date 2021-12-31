import {ADD_USER, DEL_USER} from '../types/user.types'
import {addUserToServer} from '../utils/user.utils'

export const addUser = (user) => async (dispatch) =>{
  try {
    const newUser = await addUserToServer(user)

    dispatch({
      type: ADD_USER,
      payload: newUser
    })
  } catch (error) {
    console.log(error)
  }
}

export const delUser = (user) => ({
  type: DEL_USER,
  payload: user
})
