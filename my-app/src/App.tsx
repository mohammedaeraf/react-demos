import BookInfo from "./components/BookInfo";
import Counter from "./components/Counter";
import CourseCard from "./components/CourseCard";
import CourseList from "./components/CourseList";
import CourseListSimple from "./components/CourseListSimple";
import GreetUser from "./components/GreetUser";
import MovieCard from "./components/MovieCard";
import NameInput from "./components/NameInput";
import ToggleSwitch from "./components/ToggleSwitch";

function App() {
  // Props for CourseListSimple Component
  // const courses: string[] =
  //   [
  //     "Graphic Design with Canva",
  //     "Advanced Web Design",
  //     "Frontend Development using React and TypeScript",
  //   ];

  // const title: string = "Simple Course List";

  return (
    <div className="container my-5">
      {/* <CourseListSimple title={title} courses={courses}></CourseListSimple> */}

      <GreetUser name="Abdul Rehman" message="Welcome to our React App" />

      <hr />

      <BookInfo
        title="Learning React"
        author="Alex Banks"
        year={2020}
        genres={["Programming", "Web Development"]}
      />

      <hr />

      <MovieCard
        name="Inception"
        rating={9}
        isRecommended={true}
        actors={["Leonardo DiCaprio, Joseph"]}
      />

      <CourseList />
    </div>
  );
}

export default App;
