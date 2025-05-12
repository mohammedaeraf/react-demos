import Counter from "./components/Counter";
import CourseList from "./components/CourseList";
import CourseListSimple from "./components/CourseListSimple";
import NameInput from "./components/NameInput";
import ToggleSwitch from "./components/ToggleSwitch";

function App() {
  // JSX - JavaScript XML
  // const x: number = 100;
  // const y: number = 0;
  const courses: string[] =
    [
      "Graphic Design with Canva",
      "Advanced Web Design",
      "Frontend Development using React and TypeScript",
    ];

  const title: string = "Simple Course List";


  return (
    <>
      <CourseListSimple title={title} courses={courses}></CourseListSimple>
    </>
  );
}

export default App;
