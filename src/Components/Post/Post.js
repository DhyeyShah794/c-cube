import React from "react";
import "./post.css";

const Post = ({title, image, date, info}) => {
  return (
    <div className="post">
      <img className="postImg" src={require(`../Images/${image}`)} alt="Post"/>

      <div className="postInfo">
        <span className="postTitle">
          {title}
        </span>
        <hr />
        <span className="postDate">{date}</span>
      </div>
      <p className="postDesc">
        {info}
      </p>
    </div>
  );
}

export default Post;