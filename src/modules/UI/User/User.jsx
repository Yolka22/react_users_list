import React from 'react'
import "./User.css"
const User = ({userdata}) =>{
    return(
        <div className='user'>
            <p> {userdata.id} </p>
            <p> {userdata.name} </p>
            <p> {userdata.username} </p>
        </div>
    )
}
export default User