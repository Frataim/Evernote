import React from 'react';

const List = ({posts}) => {
  return (
    <section className="my-5">
    <div className="row">
      {posts && posts.map((el) => (
        <div className="col-3 my-2" key={el.id}> 
          <div className="card text-white bg-success my-3">
            <div className="card-header">{el.title}</div>
            <div className="card-body">
              <h5 className="card-title">{el.description}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
  );
}

export default List;
