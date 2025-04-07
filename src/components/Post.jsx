import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <>
      <div class="p-4 flex flex-col justify-between gap-3 border border-gray-300 rounded-lg shadow-md bg-white">
        <Link
          class="text-xl font-semibold text-blue-700 hover:underline two-lines"
          to={`/post/${post.id}`}
        >
          {post.title}
        </Link>

        <div class="text-xs text-gray-600">
          <span class="px-2 py-0.5 rounded-full bg-gray-100 ">{post.date}</span>
        </div>

        <p class="text-gray-800 two-lines ">
          {post.content.length >= 250
            ? post.content.slice(0, 250) + " ..."
            : post.content}
        </p>

        <div class="flex items-center justify-between text-sm">
          <button class="text-gray-500 ">2 min read</button>

          <Link
            to={`/post/${post.id}`}
            class="text-blue-700 hover:underline dark:text-white"
          >
            Read more
          </Link>
        </div>
      </div>
    </>
  );
};

export default Post;
