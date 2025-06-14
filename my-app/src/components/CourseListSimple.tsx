interface CourseListSimpleProps {
  title: string;
  courses: string[];
}

function CourseListSimple(props: CourseListSimpleProps) {
  return (
    <>
      <h2 className="text-primary">{props.title}</h2>
      <ul className="list-group">
        {props.courses.map((course) => (
          <li className="list-group-item">{course}</li>
        ))}
      </ul>
    </>
  );
}
export default CourseListSimple;
