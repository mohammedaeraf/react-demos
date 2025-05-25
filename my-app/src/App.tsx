import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import CourseList from "./components/CourseList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PostList from "./components/PostList";
import PostListCard from "./components/PostListCard";
import Counter from "./components/Counter";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import RecipeListPagination from "./components/RecipeListPagination";
import RecipeListPaginationServer from "./components/RecipeListPaginationServer";

function App() {
  return (
    <div className="container-fluid d-flex flex-column min-vh-100">
      <Navbar />
      <main className="container my-4 flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/posts" element={<PostListCard />} />
          <Route path="/recipes" element={<RecipeListPaginationServer />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route
            path="/counter"
            element={<Counter title="Counter" initialVal={0} />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
