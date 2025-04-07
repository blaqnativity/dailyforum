import Post from "./Post";

const Feed = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <ul className="grid mb-6 px-1">
          <Post post={post} key={post.id} />
        </ul>
      ))}
    </>
  );
};

export default Feed;
