import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./UserInfo.css"

function UserInfo() {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Выполнение запроса Fetch API для получения данных о пользователе
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Ошибка при загрузке данных:', error));
  }, [userId]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container'>
    <div className='fullInfo'>
      <div>{userData.id}</div>
      <div>{userData.name}</div>
      <div>{userData.username}</div>
      <div>{userData.email}</div>
      <div>{userData.phone}</div>
      <div>{userData.website}</div>
    </div>
    </div>
  );
}
export default UserInfo