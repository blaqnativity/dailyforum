import { useParams, Link } from "react-router-dom";

const SinglePost = ({ posts, handleDelete, navigate }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  return (
    <>
      {post && (
        <>
          <article class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mx-auto">
              <div class="py-8">
                <h1 class="text-3xl font-bold mb-2">{post.title}</h1>
                <p class="text-gray-500 text-sm">{post.date}</p>
              </div>

              <div>
                <button
                  className="font-bold underline mb-5 cursor-pointer"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Go Back
                </button>
              </div>

              <img
                src={post.image}
                alt={post.title}
                class="w-full h-auto mb-8"
              />

              <div class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
                <p>{post.content}</p>
                <p>{post.content}</p>
                <p>{post.content}</p>
              </div>
              <button
                className="bg-red-600 text-white px-5 py-2 rounded-full mt-5 font-semibold cursor-pointer hover:bg-red-500 transition-smooth"
                disabled
                type="submit"
                onClick={() => handleDelete(post.id)}
              >
                Delete Post
              </button>
            </div>
          </article>
        </>
      )}
      :
      {!post && (
        <>
          <div className="max-w-5xl text-center mx-auto my-20 flex flex-col gap-5">
            <h2 className="text-3xl md:text-5xl font-bold text-red-500">
              sorry post does not exist or has been deleted!!
            </h2>
            <p className="underline italic text-gray-500 font-semibold text-md">
              <Link to="/">Go Back To Homepage</Link>
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default SinglePost;
