import { useEffect, useState } from "react";

type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

function Post() {
  const [posts, setPosts] = useState<Post[]>();

  const fetchPost = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data: Post[] = await response.json(); // read the data from the response
    setPosts(data);
  };

  useEffect(() => {
    fetchPost();
  }, []); // component load/mount

  return (
    <div>
      <h1>List of Posts</h1>
      {posts?.map((post) => (
        <div className="my-3 bg-info">
          <h3>Id - {post.id}</h3>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
export default Post;
