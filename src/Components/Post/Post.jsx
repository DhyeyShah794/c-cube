import React from "react";
import "./post.css";

export default function post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg"
        alt="post img"
      />

      <div className="postInfo">
        <span className="postTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
        <hr />
        <span className="postDate">29/10/2002</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur enim
        optio dolorem harum delectus, dicta rem ab temporibus repellat facere
        voluptate aliquam dolorum. Illum atque non ipsam, cupiditate laboriosam
        nulla et ad ut ea voluptas temporibus at excepturi. Adipisci soluta in
        error optio exercitationem accusamus illo quasi explicabo vitae, iure
        debitis sunt temporibus nulla nam culpa quidem officia quis omnis. Et
        voluptas fuga modi perspiciatis quibusdam, quidem quas sequi sed ipsa
        minus. Atque, sint eveniet, impedit dignissimos consequuntur itaque cum
        placeat voluptas ex fugiat tempora. Explicabo, laborum nobis sit, sed,
        doloribus cum delectus nam molestiae earum ducimus enim tempore quam?
      </p>
    </div>
  );
}
