import React from "react";

const NewPost = ({ handleSubmit, newPost, setNewPost }) => {
  return (
    <>
      <div class="bg-white border rounded-lg px-8 py-6 mx-auto my-8 max-w-2xl">
        <h2 class="text-2xl font-medium mb-4">Create new post</h2>
        <form onSubmit={handleSubmit}>
          <div class="mb-4">
            <label for="name" class="block text-gray-700 font-medium mb-2">
              Image <br />{" "}
              <span className="text-[10px] text-gray-400 font-semibold">
                Clear out the field to add your own source link
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter only image url here"
              id="image"
              class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              name="image"
              value={newPost.image}
              onChange={(e) =>
                setNewPost({ ...newPost, [e.target.name]: e.target.value })
              }
            />
          </div>

          <div class="mb-4">
            <label for="name" class="block text-gray-700 font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              name="title"
              value={newPost.title}
              onChange={(e) =>
                setNewPost({ ...newPost, [e.target.name]: e.target.value })
              }
              required
            />
          </div>

          <div class="mb-4">
            <label for="name" class="block text-gray-700 font-medium mb-2">
              Author
            </label>
            <input
              type="text"
              id="title"
              class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              name="author"
              value={newPost.author}
              onChange={(e) =>
                setNewPost({ ...newPost, [e.target.name]: e.target.value })
              }
              required
            />
          </div>

          <div class="mb-4">
            <label for="name" class="block text-gray-700 font-medium mb-2">
              Duration
            </label>
            <input
              type="number"
              id="duration"
              class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              name="duration"
              value={newPost.duration}
              onChange={(e) =>
                setNewPost({ ...newPost, [e.target.name]: e.target.value })
              }
            />
          </div>

          <div class="mb-4">
            <label for="content" class="block text-gray-700 font-medium mb-2">
              Body
            </label>
            <textarea
              id="content"
              class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              rows="5"
              name="content"
              value={newPost.content}
              onChange={(e) =>
                setNewPost({ ...newPost, [e.target.name]: e.target.value })
              }
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              class="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewPost;
