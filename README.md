# Blog App

A simple and interactive blog application built using React.js, allowing users to read, create, and manage blog posts. This app incorporates various features such as search functionality, dynamic routing, form handling, and data manipulation, making it a perfect project to showcase your frontend development skills.

## Features

- **Create a new post**: Users can submit new blog posts with a title, content, author, and image.
- **View Posts**: All blog posts are displayed on the homepage with relevant details like title, author, content, and publication date.
- **Search functionality**: Users can search for posts based on the title or content.
- **View Single Post**: Each post has a detailed view page with options to delete the post.
- **Responsive Layout**: The application is designed to be responsive and works well on both desktop and mobile devices.
  
## Skills and Technologies Used

This project demonstrates the following skills and technologies:

### 1. **React.js**:
   - Building functional components and managing state using React hooks (`useState`, `useEffect`).
   - Dynamic routing using **React Router** to navigate between pages (home, single post, add post).
   - Prop drilling for passing data between components.
   - Conditional rendering based on the existence of data.

### 2. **React Router**:
   - Implemented dynamic routes with React Router to handle navigation across different pages like Home, Add Post, and Single Post.
   - Dynamic rendering of single post based on its ID using `useParams()`.

### 3. **JavaScript**:
   - Used **JavaScript ES6+** features like arrow functions, destructuring, and spread operators for cleaner code.
   - Leveraged `map()`, `filter()`, and `find()` array methods to manage and update the state of blog posts.

### 4. **Form Handling in React**:
   - Managed form inputs and controlled components to capture user input for creating new posts.
   - Implemented form submission with `handleSubmit` and form resetting after the post is created.

### 5. **State Management**:
   - Managed the state of posts, new post data, search query, and search results using React's `useState` hook.
   - Leveraged `useEffect` to implement search filtering and update the displayed posts based on the search query.

### 6. **Date Formatting**:
   - Used the `date-fns` library to format the date when a post is created to display it in a human-readable format (`MMMM dd, yyyy p`).

### 7. **Navigation**:
   - Used **useNavigate** hook from React Router to redirect users after creating a new post or deleting a post.

### 8. **Responsive Design**:
   - Applied responsive design techniques with CSS to ensure the blog app is usable on both desktop and mobile devices.

### 9. **CRUD Operations**:
   - Implemented basic CRUD (Create, Read, Delete) operations for blog posts using `useState` to update the list of posts.
   - Posts can be deleted and new posts can be added through the app interface.

### 10. **Search Functionality**:
   - Created a custom search feature to filter blog posts based on the title or content.
   - Integrated the search functionality using `useEffect` to update search results dynamically as the user types.

### 11. **CSS**:
   - Styled the app with custom CSS to make it visually appealing, ensuring a user-friendly interface.

### 12. **Project Structure**:
   - Organized components into reusable pieces (`Navbar`, `Footer`, `Home`, `SinglePost`, `NewPost`, `Missing`) for a clean and maintainable project structure.


## Conclusion

This blog app project has helped me consolidate a variety of frontend development skills, especially around React.js, state management, routing, and dynamic content management. By building this application, I have been able to deepen my understanding of React concepts and develop a functional, user-friendly web app.
