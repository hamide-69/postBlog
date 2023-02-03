import Post from "./Post";
import { useEffect, useState } from "react";

function CallPost() {
  const [post, setPost] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("token", "pj11daaQRz7zUIH56B9Z");
    let res = fetch(
      "https://frontend-case-api.sbdev.nl/api/posts?page=1&perPage=10&sortBy=title&sortDirection=desc&searchPhrase=test ber&categoryId=1",
      { headers: myHeaders },
      {
        method: "GET",
      }
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

  function renderItems() {
    if (!error) {
      return post.map((item) => <Post item={item} />);
    } else {
      return console.log("erro happen");
    }
  }

  return <div>{renderItems()}</div>;
}

export default CallPost;
