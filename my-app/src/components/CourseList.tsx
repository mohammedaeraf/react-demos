import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Define the Course interface for type safety
interface Course {
  id: number;
  title: string;
  description: string;
}

const CourseList = () => {
  // API endpoint for courses resource on MockAPI
  const API_URL: string = "https://67a75555203008941f674e2f.mockapi.io/courses";

  // State to store the list of courses
  const [courses, setCourses] = useState<Course[]>([]);

  // Function to fetch all courses from the API
  const fetchCourses = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setCourses(data); // Update state with fetched courses
  };

  // Fetch courses when the component mounts
  useEffect(() => {
    fetchCourses();
  }, []);

  // Function to delete a course by id
  const deleteCourse = async (id: number) => {
    const deleteUrl = `${API_URL}/${id}`;
    await fetch(deleteUrl, { method: "DELETE" }); // Send DELETE request
    fetchCourses(); // Refresh the course list after deletion
  };

  return (
    <div id="container">
      <h1 className="text-danger">Course List</h1>
      {/* Link to add a new course */}
      <Link to={`/add-course`} className="btn btn-primary my-3">
        <i className="bi-plus-circle me-2"></i>
        Add Course
      </Link>
      {/* Table to display the list of courses */}
      <table className="table table-striped table-hover">
        <thead>
          <tr className="table-dark">
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Render each course as a table row */}
          {courses.map((course) => (
            <tr key={course.id}>
              <th scope="row">{course.id}</th>
              <td>{course.title}</td>
              <td>{course.description}</td>
              <td>
                {/* Link to edit the course */}
                <Link
                  to={`/edit-course/${course.id}`}
                  className="btn btn-warning me-3"
                >
                  <i className="bi-pencil-square me-2"></i>Edit
                </Link>
                {/* Button to delete the course */}
                <button
                  className="btn btn-danger"
                  onClick={() => deleteCourse(course.id)}
                >
                  <i className="bi-trash me-2"></i> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseList;