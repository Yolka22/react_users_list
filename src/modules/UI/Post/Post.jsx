import React from 'react'
import "./Post.css"
const Post =({postData})=>{
    return(
        <div className='post'>
            <p><span>Title :</span> {postData.title}</p>
            <p><span>Body :</span> {postData.body}</p>
        </div>
    )
}
export default Post