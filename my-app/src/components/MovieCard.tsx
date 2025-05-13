// Define the props interface for the MovieCard component
interface MovieProps {
  name: string;           // The name of the movie
  rating: number;         // The movie's rating out of 10
  actors: string[];       // Array of actors in the movie
  isRecommended: boolean; // Whether the movie is recommended
}

// Functional component to display movie information
const MovieCard = (props: MovieProps) => {
  return (
    <div  className="border border-secondary m-3 p-3">
      {/* Display the movie name */}
      <h2>{props.name}</h2>
      {/* Display the movie rating */}
      <p>Rating: {props.rating}/10</p>
      {/* Label for the cast list */}
      <p>Cast:</p>
      <ul>
        {/* Iterate over the actors array and render each actor as a list item */}
        {props.actors.map((actor, i) => <li key={i}>{actor}</li>)}
      </ul>
      {/* Conditionally display recommendation text based on isRecommended */}
      <p>{props.isRecommended ? "Highly Recommended!" : "Optional Watch"}</p>
    </div>
  );
};

export default MovieCard;