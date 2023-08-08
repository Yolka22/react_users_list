import React from 'react'
import UsersList from "../../modules/UI/UsersList/UsersList"
import "./Home.css"
const apiLink = "https://jsonplaceholder.typicode.com/users"

function Home() {
  return (
    <div className='home'>
      <UsersList apiLink={apiLink}></UsersList>
    </div>
  );
}

export default Home;