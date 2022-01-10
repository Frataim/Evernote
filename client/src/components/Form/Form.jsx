import Input from "../Input/Input";
import useInput from '../../hooks/useInput'
import { useDispatch } from 'react-redux'
import { addPost } from '../../redux/actions/posts.actions'

function Form() {
  const dispatch = useDispatch()

  const list = [
    useInput({ name: 'title' }),
    // useInput({ name: 'description' }),
  ]

  function handleSubmit(e) {
    e.preventDefault()
    const newPost = {}
    list.forEach((el) => {
      newPost[el.attr.name] = el.getValue()
    })

    dispatch(addPost(newPost))
    list.forEach(el => el.clearValue())
  }

  return (
    <form onSubmit={handleSubmit}>
      {list.map((el) => <Input key={el.attr.name} {...el.attr} />)}
      <button type="submit" className="btn btn-success">Submit</button>
    </form>
  )
}

export default Form;
