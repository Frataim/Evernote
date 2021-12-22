import React, { useState } from 'react'
import Form from './components/Form/Form'
import List from './components/List/List'

const App = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [posts, setPosts] = useState([])

  function handleTitle(e) {
    setTitle(e.target.value)
  }

  function handleDescription(e) {
    setDescription(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()

    const newPost = {
      title,
      description,
    }
    setPosts((prev) => [...prev, newPost])
    setTitle('')
    setDescription('')
  }

  return (
    <div className="container my-5">
      <Form title={title} description={description} handleTitle={handleTitle}  handleDescription={handleDescription} handleSubmit={handleSubmit}/>
      <hr></hr>
      <List posts={posts}/>
    </div>
  )
}

export default App
