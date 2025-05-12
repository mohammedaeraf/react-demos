interface CourseProps {
  title: string;
  instructor: string;
  duration: number;
  topics: string[];
}

const CourseCard = ({ title, instructor, duration, topics }: CourseProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Instructor: {instructor}</p>
      <p>Duration: {duration} hours</p>
      <p>Topics Covered:</p>
      <ol>
        {topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ol>
    </div>
  );
};
export default CourseCard;
