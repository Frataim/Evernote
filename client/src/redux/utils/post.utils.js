
// добавление заметки
export const addPostToServer = async (data) => {
  const response = await fetch(process.env.REACT_APP_URL + 'posts/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(data)
  })
  console.log(response)
  if (response.ok) {
    return await response.json()
  } else {
    throw Error('Noooooooooooo :(((')
  }
}

// редактировать
export const editPostToServer = async (data) => {
  const response = await fetch(process.env.REACT_APP_URL + '/edit/:id', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(data)
  })
  console.log(response)
  if (response.ok) {
    return await response.json()
  } else {
    throw Error('Noooooooooooo :(((')
  }
}

// изменить статус
export const changeStatusToServer = async (data) => {
  const response = await fetch(process.env.REACT_APP_URL + '/posts/${id}', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(data)
  })
  console.log(response)
  if (response.ok) {
    return await response.json()
  } else {
    throw Error('Noooooooooooo :(((')
  }
}


// export const addNewPost = (dataFromForm) => async (dispatch) => {
//   const response = await axios.post('http://localhost:3001/note/new', dataFromForm)
//   const newPost = response.data
//   dispatch(addPost(newPost))
// }
