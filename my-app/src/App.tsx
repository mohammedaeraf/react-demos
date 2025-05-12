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
  // JSX - JavaScript XML
  // const x: number = 100;
  // const y: number = 0;

  // Props for CourseListSimple Component
  // const courses: string[] =
  //   [
  //     "Graphic Design with Canva",
  //     "Advanced Web Design",
  //     "Frontend Development using React and TypeScript",
  //   ];

  // const title: string = "Simple Course List";


  return (
    <>
      {/* <CourseListSimple title={title} courses={courses}></CourseListSimple> */}

      <GreetUser name="Isa" />

      <hr />

      <CourseCard
        title="Graphic Design with Canva"
        instructor="John Doe"
        duration={5}
        topics={["Design Principles", "Color Theory", "Typography"]}
      />

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
    </>
  );
}

export default App;
