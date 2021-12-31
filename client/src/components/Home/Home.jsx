import React, {useEffect} from 'react';

const Home = () => {
  // связь с бэком
  useEffect(() => {
    fetch(process.env.REACT_APP_URL)
    // console.log("FRONT")
      .then((response) => response.json())
  }, [])
  return (
    <>
    <h2 className="container my-5">Добро пожаловать на веб-сервис для создания и хранения заметок </h2>
    <h3 className= "d-flex justify-content-center"> Пройдите регистрацию</h3>
    </>
  );
}

export default Home;
