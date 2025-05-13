interface BookProps {
  title: string;
  author: string;
  year: number;
  genres: string[];
}

const BookInfo = (props: BookProps) => {
  return (
    <div className="border border-danger m-3 p-3">
      <h3>
        {props.title} ({props.year})
      </h3>
      <p>Author: {props.author}</p>
      <p>Genres:</p>
      <ul>
        {props.genres.map((genre) => (
          <li>{genre}</li>
        ))}
      </ul>
    </div>
  );
};
export default BookInfo;
