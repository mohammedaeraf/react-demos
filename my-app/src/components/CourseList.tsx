import { useState } from "react";

function CourseList() {
  // expected to return markup (HTML/CSS Code)
  const courses = [
    {
      id: "GD",
      title: "Graphic Design with Canva",
      duration: "30 days",
      description:
        "Graphic Design with Canva.. Graphic Design with Canva... Graphic Design with Canva",
    },
    {
      id: "WD",
      title: "Advanced Web Design",
      duration: "60 days",
      description:
        "Advanced Web Design... Advanced Web Design.. Advanced Web Design",
    },
    {
      id: "REACT",
      title: "Frontend Development using React and TypeScript",
      duration: "60 days",
      description:
        "Frontend Development using React and TypeScript.. Frontend Development using React and TypeScriptFrontend Development using React and TypeScript",
    },

    // "Graphic Design with Canva",
    // "Advanced Web Design",
    // "Frontend Development using React and TypeScript",
    // "Backend Development using Java and Spring Boot",
    // "Advanced Excel",
  ];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h2 className="text-primary">Course List</h2>
      <ul className="list-group">
        {courses.map((course, index) => (
          <li className={selectedIndex == index ? "list-group-item active" : "list-group-item"}
            key={course.id} onClick={() => setSelectedIndex(index)}>
            {course.title} - {course.duration}
            <br />
            <span className="small text-info">{course.description}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
export default CourseList;
