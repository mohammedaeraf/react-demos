import { useState } from "react";
import { Link } from "react-router-dom";

// Define the Recipe type for type safety
type Recipe = {
  id: number;
  name: string;
  servings: number;
  cuisine: string;
  difficulty: string;
  image: string;
};

const RecipeSearch = () => {
  // State to store the list of recipes returned from the API
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  // State to store the current search term entered by the user
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Function to fetch recipes from the API based on the search term
  const fetchRecipes = async (searchTerm: string) => {
    // Fetch recipes using the search term as a query parameter
    const response = await fetch(`https://dummyjson.com/recipes/search?q=${searchTerm}`);
    const data = await response.json();
    setRecipes(data.recipes); // Update the recipes state with the fetched data
  };

  return (
    <div>
      <h1 className="text-danger fw-bold mb-4">Recipe Search</h1>
      {/* Search Box */}
      <div className="mb-4 d-flex">
        {/* Input for entering the search term */}
        <input
          type="text"
          className="form-control"
          placeholder="Search recipes (e.g. Pizza, Soup, Cake)..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)} // Update searchTerm state on input change
        />
        {/* Button to trigger the search */}
        <button
          className="btn btn-primary"
          onClick={() => fetchRecipes(searchTerm)} // Fetch recipes when button is clicked
        >
          Search
        </button>
      </div>

      {/* Recipe cards */}
      <div className="row">
        {recipes.map((recipe) => (
          <div className="col-md-4 mb-3" key={recipe.id}>
            <div className="card h-100">
              {/* Link to the recipe details page */}
              <Link to={`/recipes/${recipe.id}`}>
                <img alt="" src={recipe.image} className="card-img-top" />
              </Link>
              <div className="card-body">
                <h4 className="card-title">{recipe.name}</h4>
                <p className="card-text mb-1">
                  <span className="fw-bold">Cuisine:</span> {recipe.cuisine}
                </p>
                <p className="card-text">
                  <span className="fw-bold">Difficulty:</span>{" "}
                  {recipe.difficulty}
                </p>
              </div>
              <div className="card-footer">
                {/* Link to view more details about the recipe */}
                <Link to={`/recipes/${recipe.id}`}>View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeSearch;