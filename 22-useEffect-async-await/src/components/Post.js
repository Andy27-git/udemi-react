import React from "react";
import './Post.css'

const Post = (props) => {
  const { userId, id, title, body } = props;
  return (
    <div className="post">
      <small>{id}</small>
      <h2>{title}</h2>
      <p>{body}</p>
      <h3>User Id: {userId}</h3>
    </div>
  );
};

export default Post;
