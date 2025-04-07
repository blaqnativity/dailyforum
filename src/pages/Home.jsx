import Feed from "../components/Feed";
const Home = ({ posts }) => {
  return (
    <>
      <div class="w-full">
        <section class="flex flex-col justify-center max-w-7xl px-4 py-10 mx-auto sm:px-6">
          <h2 class="mb-6 text-2xl font-bold text-gray-900 md:text-3xl ">
            All Blog Posts
          </h2>
          {posts.length ? (
            <Feed posts={posts} />
          ) : (
            <p className="text-lg font-medium text-red-500 text-center my-10">
              There is no post to display at the moment..
            </p>
          )}
        </section>
      </div>
    </>
  );
};

export default Home;
