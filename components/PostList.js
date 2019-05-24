import PostListItem from "./PostListItem";

const PostList = ({ posts }) => (
  <div className="container">
    <div className="row">
      {posts.map((post, index) => <PostListItem key={post.id} index={index} post={post} />)}
    </div>
  </div>
);

export default PostList;