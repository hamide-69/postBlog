import Post from "./Post";
import { useEffect, useState } from "react";
import postImg from "../images/postImg.jpg";

function CallPost() {
  const [post, setPost] = useState([]);
  const [error, setError] = useState(false);
  const [visible, setVisible] = useState(4);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("token", "pj11daaQRz7zUIH56B9Z");
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    let res = fetch(
      "https://frontend-case-api.sbdev.nl/api/posts?page=1&perPage=30&sortBy=title&sortDirection=asc&searchPhrase=new post&categoryId=1",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setPost(result.data);
      })

      .catch((error) => {
        setError({
          error: true,
        });
      });
  }, []);

  console.log("visi :" + visible);
  return (
    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12   post-list">
      {post.slice(0, visible).map((item, index) => (
        <div className="card  mb-4" style={{ width: "18rem" }} key={item.id}>
          <img src={postImg} className="card-img-top" alt={item.title} />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.content}</p>
          </div>
        </div>
      ))}
      {visible < 10 && (
        <button
          onClick={() => setVisible(visible + 4)}
          type="button"
          className="load-more"
        >
          Load more
        </button>
      )}
    </div>
  );
}

export default CallPost;
