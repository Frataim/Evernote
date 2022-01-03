import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Form from './components/Form/Form'
import List from './components/List/List'
import { useDispatch, useSelector } from 'react-redux'
// import { getAllPosts } from './redux/actions/posts.actions'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Notes from './components/Notes/Notes'
import Signin from './components/Signin/Signin'
import Signup from './components/Signup/Signup'
import React from 'react'
import Signout from './components/Signout/Signout'
import { authCheck } from './redux/utils/user.utils'

function App() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(authCheck())
  }, [])

  // useEffect(() => {
  //   fetch(process.env.EXPRESS_APP_PORT)
  //     .then((response) => response.json())
  //     .then((data) => dispatch(getAllPosts(data)))
  // }, [])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {user && <Route path='/' element={
          <>
          <Form />
          <List />
          </>}
        />}
        <Route path="/" element={<Home />} />
        <Route path="posts" element={<Notes />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signout" element={<Signout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
