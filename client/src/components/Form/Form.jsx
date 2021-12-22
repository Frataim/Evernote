import React from 'react'

const Form = ({
  title,
  description,
  handleTitle,
  handleDescription,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title: {title}
        </label>
        <input
          onChange={handleTitle}
          value={title}
          className="form-control"
          id="title"
          aria-describedby="title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description:{description}
        </label>
        <input
          onChange={handleDescription}
          value={description}
          className="form-control"
          id="description"
          aria-describedby="description"
        />
      </div>
      <button type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  )
}

export default Form
