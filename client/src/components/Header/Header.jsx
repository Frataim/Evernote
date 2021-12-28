import React from 'react';
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  // const homeHandler = () => {
  //   navigate('/')
  // }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Evernote</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/posts">Notes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/signin">Signin</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/signup">Signup</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/signout">Signout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default Header;
