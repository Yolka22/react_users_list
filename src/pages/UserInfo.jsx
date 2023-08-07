import React from 'react'
function UserInfo ({userdata}){
    return(
        <div>
      <div>{userdata.id}</div>
      <div>{userdata.name}</div>
      <div>{userdata.username}</div>
      <div>{userdata.email}</div>
      <div>{userdata.phone}</div>
      <div>{userdata.website}</div>
    </div>
    )
}
export default UserInfo