import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Profile from "./components/Profile";
import Post from "./components/Post";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <nav className="p-4 space-x-4 bg-gray-200">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/posts/1">Post 1</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />

        {/* Protected nested route for Profile */}
        <Route
          path="profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Dynamic route */}
        <Route path="posts/:postId" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
