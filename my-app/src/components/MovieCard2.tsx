interface MovieCard2Props {
  title: string;
  rating: number;
  actors: string[];
}

function MovieCard2(props: MovieCard2Props) {
  return (
    <div className="m-3 p-3">
      <h1 className="text-danger">Movie Card</h1>
      <h2 className="badge text-primary"> {props.title}</h2>
      <h3 className="text-secondary"> Rating - {props.rating} / 10</h3>
      <p>
        {props.actors.map((actor) => (
          <span className="text-warning">{actor} </span>
        ))}
      </p>
    </div>
  );
}
export default MovieCard2;
