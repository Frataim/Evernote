export const addPostToServer = async (data) => {
  const response = await fetch(process.env.REACT_APP_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(data)
  })

  if (response.ok) {
    return await response.json()
  } else {
    throw Error('Noooooooooooo :(((')
  }
}
