import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Header from "./components/Header";
import Home from "./pages/Home";
import Missing from "./pages/Missing";
import SinglePost from "./pages/SinglePost";
import NewPost from "./pages/NewPost";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from "date-fns";

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "5 Emerging Tech Trends to Watch in 2025",
      content:
        "As the digital world rapidly evolves, 2025 is already showing signs of major shifts. From breakthroughs in quantum computing to the rise of generative AI in everyday products, these innovations are set to transform industries. In this post, we explore five major tech trends you can't afford to ignore this year, including AI, 6G, biotech advancements, and sustainable tech.",
      author: "Olukayode",
      date: "April 7, 2025 at 10:30 AM",
      image:
        "https://i.pinimg.com/736x/74/3f/ad/743fadb48e98f14b818d6f04d42b96f6.jpg",
      duration: 2,
    },
    {
      id: 2,
      title: "Top 10 Gadgets You Need This Year",
      content:
        "The tech world never sleeps—and neither should your gear. From foldable smartphones and smart rings to AI-powered home assistants and wearable health trackers, we’ve rounded up the top 10 gadgets of 2025 that are redefining convenience, style, and functionality. This guide is perfect for tech enthusiasts and curious shoppers alike.",
      author: "Olukayode",
      date: "April 6, 2025 at 3:45 PM",
      image:
        "https://i.pinimg.com/736x/74/3f/ad/743fadb48e98f14b818d6f04d42b96f6.jpg",
      duration: 1,
    },
    {
      id: 3,
      title: "How to Start a Career in Tech as a Teen",
      content:
        "Getting into tech doesn’t have to wait until college. Today, teens around the world are learning to code, build apps, and even launch startups—all before turning 18. This post covers practical steps to get started: choosing the right programming languages, free learning platforms, building a portfolio, and finding your niche early.",
      author: "Olukayode",
      date: "April 5, 2025 at 9:00 AM",
      image:
        "https://i.pinimg.com/736x/12/2e/90/122e903ccf9efea79561d84f4f9549c6.jpg",
      duration: 2,
    },
    {
      id: 4,
      title: "Travel Tech: How Innovations Are Changing the Way We Explore",
      content:
        "Gone are the days of paper maps and bulky cameras. With smart luggage, AI-powered travel apps, and augmented reality tours, tech has completely reshaped the travel experience. In this post, we explore the best new tools and gadgets for modern travelers and how they’re enhancing everything from planning to the journey itself.",
      author: "Olukayode",
      date: "April 4, 2025 at 6:20 PM",
      image:
        "https://i.pinimg.com/474x/66/fe/74/66fe74a7154a05976dcedfb51214e805.jpg",
      duration: 5,
    },
  ]);
  const [newPost, setNewPost] = useState({
    title: "",
    author: "",
    content: "",
    duration: 3,
    image:
      "https://i.pinimg.com/474x/66/fe/74/66fe74a7154a05976dcedfb51214e805.jpg",
  });
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  // new post submit function
  const handleSubmit = (e) => {
    e.preventDefault();

    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy p"); // ✅ FIX: correct format

    const newPostObject = {
      id,
      title: newPost.title,
      author: newPost.author,
      content: newPost.content,
      date: datetime,
      duration: newPost.duration,
      image: newPost.image,
    };

    const updatedPosts = [...posts, newPostObject]; // ✅ FIX: spread correctly
    setPosts(updatedPosts);

    // Reset form
    setNewPost({
      title: "",
      author: "",
      content: "",
      date: "",
      duration: 3,
      image:
        "https://i.pinimg.com/474x/66/fe/74/66fe74a7154a05976dcedfb51214e805.jpg",
    });

    navigate("/"); // ✅ Redirect to home after post is added
  };

  const handleDelete = (id) => {
    const postList = posts.filter((post) => post.id !== id);
    setPosts(postList);
    navigate("/");
  };

  return (
    <>
      <Navbar search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="*" element={<Missing />} />
        <Route
          path="/add-post"
          element={
            <NewPost
              handleSubmit={handleSubmit}
              newPost={newPost}
              setNewPost={setNewPost}
            />
          }
        />
        <Route
          path="/post/:id"
          element={
            <SinglePost
              posts={posts}
              handleDelete={handleDelete}
              navigate={navigate}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
