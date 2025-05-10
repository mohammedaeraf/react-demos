import Counter from "./components/Counter";
import CourseList from "./components/CourseList";

function App() {
  // JSX - JavaScript XML
  const x: number = 100;
  const y: number = 0;


  return (
    <>
      <h1 className="mb-3">App Component</h1>
      <Counter title="Counter App 1" initialVal={x} />
      <br />
      <div className="mb-3"></div>
      <Counter title="Counter App 2" initialVal={y} />


    </>
  );
}

export default App;
