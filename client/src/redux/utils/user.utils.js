import { addUser, delUser } from "../actions/user.actions"

// export const addUserToServer = async (data) => {
//   // здесь ошибка выходит для входа под своей учетной записи
//   const response = await fetch(process.env.REACT_APP_API_URL, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     credentials: 'include',
//     body: JSON.stringify(data)
//   })

//   if (response.ok) {
//     return await response.json()
//   } else {
//     throw Error('Noooooooooooo :(((')
//   }
// }

// зарегистрироваться
export const signUp = (payload) => async (dispatch) => {
  const response = await fetch('/signup', signUp(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(payload)
  })
  if (response.ok) {
    const user = await response.json()
    dispatch(addUser(user))
  }
}

// войти
export const signIn = (payload) => async (dispatch) => {
  const response = await fetch('/signin', signIn(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(payload)
  })
  if (response.ok) {
    const user = await response.json()
    dispatch(addUser(user))
  }
}

// выход
export const signOut = () => async (dispatch) => {
  const response = await fetch('/signout',signOut(), {
    credentials:'include'
  })
  if (response.ok) {
    dispatch(delUser())
  }
}

// проверка авторизации
export const authCheck = () => async (dispatch) => {
  const response = await fetch('/', authCheck(), {
    credentials: 'include'
  })
  if (response.ok) {
    const user = await response.json()
    dispatch(addUser(user))
  }
}
