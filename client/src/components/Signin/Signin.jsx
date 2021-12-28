import React from 'react'

const Signin = () => {
  return (
    <form>
      <div className="container my-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="container mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="container mb-3">
        <button type="submit" className="btn btn-success">
          Signin
        </button>
      </div>
    </form>
  )
}

export default Signin
