interface BookProps {
  title: string;
  author: string;
  year: number;
  genres: string[];
}

const BookInfo = ({ title, author, year, genres }: BookProps) => {
  return (
    <div>
      <h3>{title} ({year})</h3>
      <p>Author: {author}</p>
      <p>Genres:</p>
      <ul>
        {genres.map((g, idx) => (
          <li key={idx}>{g}</li>
        ))}
      </ul>
    </div>
  );
};
export default BookInfo;
