import React from 'react'
import Post from '../Post/Post'
import "./PostsList"
const PostsList = ({postsArray}) =>{
    return(
        <div className='posts'>
            {postsArray.map((post) => (
        <Post key={post.id} postData={post} />
      ))}
        </div>
    )
}

export default PostsList