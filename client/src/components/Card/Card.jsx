import { toggleFavorite } from '../../redux/actions/posts.actions'
import { useDispatch } from 'react-redux'

function Card({ id, title, isFavorite }) {
  const dispatch = useDispatch()

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
      {/* <div className="card-body">
        <h5 className="card-title">{description}</h5> */}
        <button onClick={() => handleFavorite(id)}>
          {isFavorite ? '💓' : '💛'}
        </button>
      {/* </div> */}
    </div>
  )
}

export default Card


