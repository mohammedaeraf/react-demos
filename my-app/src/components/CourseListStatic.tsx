import CourseCard from "./CourseCard";
import { type Course } from "../types/Course";

const CourseListStatic = () => {
  const courses: Course[] = [
    {
      title: "Web Design",
      instructor: "Alice Johnson",
      duration: 20,
      imageUrl: "/web-design.jpg",
      topics: ["HTML", "CSS", "Bootstrap"],
    },
    {
      title: "React Fundamentals",
      instructor: "Bob Smith",
      duration: 25,
      imageUrl: "/reactjs.webp",
      topics: ["JSX", "Components", "Hooks"],
    },
    {
      title: "Full Stack with MERN",
      instructor: "Charlie Davis",
      duration: 40,
      imageUrl: "/mern.png",
      topics: ["MongoDB", "Express", "React", "Node.js"],
    },
    {
      title: "Python for Beginners",
      instructor: "Jonathan Doe",
      duration: 25,
      imageUrl: "/python.webp",

      topics: ["Loops", "Arrays", "Functions"],
    },
  ];

  return (
    <div className="container">
      <h2 className="text-secondary my-5">Our Courses</h2>
      <div className="row">
        {courses.map((course) => (
          <CourseCard
            title={course.title}
            instructor={course.instructor}
            duration={course.duration}
            topics={course.topics}
            imageUrl={course.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseListStatic;
