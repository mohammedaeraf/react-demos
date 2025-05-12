interface BookProps {
  title: string;
  author: string;
  year: number;
  genres: string[];
}

const BookInfo = (props: BookProps) => {
  return (
    <div>
      <h3>{props.title} ({props.year})</h3>
      <p>Author: {props.author}</p>
      <p>Genres:</p>
      <ul>
        {props.genres.map((g, idx) => (
          <li key={idx}>{g}</li>
        ))}
      </ul>
    </div>
  );
};
export default BookInfo;
