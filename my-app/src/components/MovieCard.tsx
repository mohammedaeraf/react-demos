interface MovieProps {
  name: string;
  rating: number;
  actors: string[];
  isRecommended: boolean;
}

const MovieCard = ({ name, rating, actors, isRecommended }: MovieProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Rating: {rating}/10</p>
      <p>Cast:</p>
      <ul>
        {actors.map((actor, i) => <li key={i}>{actor}</li>)}
      </ul>
      <p>{isRecommended ? "Highly Recommended!" : "Optional Watch"}</p>
    </div>
  );
};
export default MovieCard;
