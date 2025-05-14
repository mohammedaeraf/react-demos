import { getCourses } from "../services/courseService";
import type { Course } from "../types/Course";
import CourseCard from "./CourseCard";

const CourseList = () => {
  const courses: Course[] = getCourses();

  return (
    <div className="border border-warning m-3 p-3">
      <h2>Available Courses</h2>
      {courses.map((course) => (
        <CourseCard
          title={course.title}
          instructor={course.instructor}
          duration={course.duration}
          topics={course.topics}
        />
      ))}
    </div>
  );
};

export default CourseList;
