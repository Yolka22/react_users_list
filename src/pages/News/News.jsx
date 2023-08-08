import React from "react";
import UserApi from "../../modules/Api/UserApi";
import PostsList from "../../modules/UI/PostsList/PostsList";
const postsUrl = "https://jsonplaceholder.typicode.com/posts";

const News = () => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    UserApi.getInfo(postsUrl)
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error("Error setting users:", error);
      });
  }, []);


  return (
    <div>
        <PostsList postsArray={posts}></PostsList>
    </div>
  )
};
export default News;
