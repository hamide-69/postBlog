import React from "react";

const Post = ({ item }) => (
  <div className="col s4">
    <div className="card">
      <div className="card-image">
        <img src={item.img_url} />
      </div>
      <div className="card-content">
        <p>{item.title}</p>
        <span className="card-title">{item.content}</span>
      </div>
      <div className="card-action"></div>
    </div>
  </div>
);

export default Post;
