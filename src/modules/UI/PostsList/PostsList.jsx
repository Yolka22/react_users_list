import React, { useState } from 'react';
import Post from '../Post/Post';
import './PostsList.css';

const PostsList = ({ postsArray }) => {
  const [visiblePosts, setVisiblePosts] = useState(5);

  const loadMorePosts = () => {
    setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 5);
  };

  return (
    <div className="posts">
      {postsArray.slice(0, visiblePosts).map(post => (
        <Post key={post.id} postData={post} />
      ))}
      {visiblePosts < postsArray.length && (
        <button  onClick={loadMorePosts} className="custom-btn">
          Load More
        </button>
      )}
    </div>
  );
};

export default PostsList;
