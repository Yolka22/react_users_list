import React from 'react'
import UsersList from "../modules/UI/UsersList/UsersList"
const apiLink = "https://jsonplaceholder.typicode.com/users"

function Home() {
  return (
    <div>
      <UsersList apiLink={apiLink}></UsersList>
    </div>
  );
}

export default Home;