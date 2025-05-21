import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Recipe = {
  id: number;
  name: string;
  servings: number;
  cuisine: string;
  difficulty: string;
  image: string;
}

const RecipeList = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null); // Error state

  const fetchPosts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/recipes");
      if (!response.ok) {
        throw new Error("Failed to fetch recipes");
      }
      const data = await response.json();
      const recipesData: Recipe[] = data.recipes;

      setRecipes(recipesData);
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="text-center">
        <h1 className="text-danger fw-bold">Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center">
        <h1 className="text-danger fw-bold">Error: {error}</h1>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-danger fw-bold mb-4">Recipes</h1>
      <div className="row">
        {recipes.map((recipe) => (
          <div className="col-md-4 mb-3" key={recipe.id}>
            <div className="card h-100">
              <Link to={`/recipes/${recipe.id}`}>
                <img alt="" src={recipe.image} className="card-img-top" />
              </Link>

              <div className="card-body">
                <h4 className="card-title">{recipe.name}</h4>
                <p className="card-body">{recipe.difficulty}</p>
              </div>
              <div className="card-footer">
                <Link to={`/recipes/${recipe.id}`}>
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RecipeList;
