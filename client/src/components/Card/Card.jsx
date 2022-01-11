import { deletePost, toggleFavorite, changeStatus } from '../../redux/actions/posts.actions'
import { useDispatch } from 'react-redux'

function Card({ id, title, isFavorite, status }) {
  const dispatch = useDispatch()


  const changeStatusHandler = (id) => {
    dispatch(changeStatus(id))
  }

  const deleteHandler = (id) => {
    dispatch(deletePost(id))
  }
  
  const handleFavorite = (id) => {
    fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => dispatch(toggleFavorite(data)))
  }

  return (
    <div className="card text-white bg-success mb-3">
      <div className="card-header">{title}</div>
      <div>
      <button onClick={() => changeStatusHandler(id)} type="submit" className={`btn mx-1 btn-${status ? 'secondary' : 'success'} ml-auto`}>{status ? 'Undone' : 'Done'}</button>
      <button onClick={() => deleteHandler(id)} type="submit" className="btn btn-danger mx-1">Delete</button>
      </div>
      {/* <div className="card-body">
        <h5 className="card-title">{description}</h5> */}
        {/* <button onClick={() => handleFavorite(id)}>
          {isFavorite ? '💓' : '💛'}
        </button> */}
      {/* </div> */}
    </div>
  )
}

export default Card


