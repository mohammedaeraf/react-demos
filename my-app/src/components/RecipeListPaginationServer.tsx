// RecipeList with Client side Pagination
import { useEffect, useState } from "react";
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

// Number of records to show per page
const RECORDS_PER_PAGE = 10;

const RecipeListPaginationServer = () => {
  // State to store all recipes
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const [totalRecipes, setTotalRecipes] = useState<number>(0);
  // State to track the current page
  const [currentPage, setCurrentPage] = useState<number>(1);
  // State to track loading status
  const [loading, setLoading] = useState<boolean>(true);
  // State to store any error message
  const [error, setError] = useState<string | null>(null);

  // Fetch recipes from the API
  const fetchPosts = async () => {
    try {
      const skipRecipes = (currentPage - 1) * RECORDS_PER_PAGE;
      let apiUrl: string = `https://dummyjson.com/recipes?limit=${RECORDS_PER_PAGE}&skip=${skipRecipes}`;
      console.log(apiUrl);
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch recipes");
      }
      const data = await response.json();
      setTotalRecipes(data.total);
      console.log(`Total Recipes = ${totalRecipes}`);
      const recipesData: Recipe[] = data.recipes;

      setRecipes(recipesData); // Store recipes in state
    } catch (err: any) {
      setError(err.message || "An error occurred"); // Store error message
    } finally {
      setLoading(false); // Set loading to false after fetch
    }
  };

  // Fetch recipes when the component mounts and also when the current page changes
  useEffect(() => {
    fetchPosts();
  }, [currentPage]);

  // Calculate total number of pages
  const totalPages = Math.ceil(totalRecipes / RECORDS_PER_PAGE);

  // Generate an array of page numbers for pagination controls
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Show loading message while fetching data
  if (loading) {
    return (
      <div className="text-center">
        <h1 className="text-danger fw-bold">Loading...</h1>
      </div>
    );
  }

  // Show error message if fetch fails
  if (error) {
    return (
      <div className="text-center">
        <h1 className="text-danger fw-bold">Error: {error}</h1>
      </div>
    );
  }

  // Render the paginated recipes and pagination controls
  return (
    <div>
      <h1 className="text-danger fw-bold mb-4">Recipes</h1>
      <div className="row">
        {recipes.map((recipe) => (
          <div className="col-md-3 mb-3" key={recipe.id}>
            <div className="card h-100">
              {/* Link to recipe details page */}
              <Link to={`/recipes/${recipe.id}`}>
                <img alt="" src={recipe.image} className="card-img-top" />
              </Link>

              <div className="card-body">
                <h4 className="card-title">{recipe.name}</h4>
                <p className="card-body">{recipe.difficulty}</p>
              </div>
              <div className="card-footer">
                {/* Link to view recipe details */}
                <Link to={`/recipes/${recipe.id}`}>View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      <nav className="mt-4">
        <ul className="pagination pagination-lg justify-content-center">
          <li className="page-item">
            <button
              className={currentPage == 1 ? "page-link disabled" : "page-link"}
              onClick={() => {
                if (currentPage > 1) setCurrentPage(currentPage - 1);
              }}
            >
              Previous
            </button>
          </li>
          {pageNumbers.map((pageNumber) => (
            <li
              className={
                currentPage == pageNumber ? "page-item active" : "page-item"
              }
              key={pageNumber}
            >
              <button
                className="page-link"
                onClick={() => {
                  setCurrentPage(pageNumber); // Set the current page
                  window.scrollTo({ top: 0 }); // Scroll to top on page change
                }}
              >
                {pageNumber}
              </button>
            </li>
          ))}
          <li className="page-item">
            <button
              className={
                currentPage == totalPages ? "page-link disabled" : "page-link"
              }
              onClick={() => {
                if (currentPage < totalPages) setCurrentPage(currentPage + 1);
              }}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default RecipeListPaginationServer;
