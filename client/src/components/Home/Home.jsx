import React, {useEffect} from 'react';

const Home = () => {
  // связь с бэком
  useEffect(() => {
    fetch(process.env.REACT_APP_URL)
      .then((response) => response.json())
  }, [])
  return (
    <h2 className="container my-5">Добро пожаловать на веб-сервис для создания и хранения заметок </h2>
  );
}

export default Home;
