import { useEffect, useState } from "react";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  // imageUrl : string;
}

const PostListCard = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data: Post[] = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1 className="text-danger fw-bold mb-4">Posts</h1>

      <div className="row">
        {posts.map((post) => (
          <div className="col-md-3 mb-3">
            <div className="card h-100" key={post.id}>
              <img src={`https://picsum.photos/id/${post.id}/300`} alt="" />
              <div className="card-body">
                <h4 className="card-title text-danger">{post.title}</h4>
                <p className="card-text text-secondary">{post.body}</p>
                <a href="" className="btn btn-primary">
                  View Entire Post
                </a>
              </div>
              <div className="card-footer text-muted">
                Author - {post.userId}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PostListCard;
