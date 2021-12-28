import React from 'react'
import Form from '../Form/Form'
import List from '../List/List'

const Notes = () => {
  return (
    <div className="container my-3">
      {' '}
      Notes
      <div className="container my-3">
        <Form />
        <List />
      </div>
    </div>
  )
}

export default Notes
