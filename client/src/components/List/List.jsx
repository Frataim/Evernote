import { memo } from 'react'
import Card from "../Card/Card"
import { useSelector } from 'react-redux'


function List() {
  const posts = useSelector((state) => state.posts)

  return (
    <section className="my-5">
      <div className="row">
        {posts && posts.map((el) => (
          <div className="col-3 my-2" key={el.id}>
            <Card {...el} />
          </div>
        ))}

      </div>
    </section>
  )
}

export default memo(List)
