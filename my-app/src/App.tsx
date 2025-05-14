import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import CourseList from "./components/CourseList";

function App() {
  return (

    <CourseList />

    // <BrowserRouter>
    //   <div className="container my-5">
    //     <Link to="/">Home</Link> | <Link to="/about">About</Link> |
    //     <Link to="/contact">Contact</Link>
    //   </div>

    //   <Routes>
    //     <Route path="/" element={<Home />}></Route>
    //     <Route path="/about" element={<About />}></Route>
    //     <Route path="/contact" element={<Contact />}></Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
