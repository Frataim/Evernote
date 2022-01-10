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
