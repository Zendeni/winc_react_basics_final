import RecipeListPage from "./pages/RecipeListPage";
import RecipePage from "./pages/RecipePage";
import { useState } from "react";

const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBackClick = () => {
    setSelectedRecipe(null);
  };

  return (
    <>
      {selectedRecipe ? (
        <RecipePage recipe={selectedRecipe} onBackClick={handleBackClick} />
      ) : (
        <RecipeListPage onRecipeSelect={handleRecipeSelect} />
      )}
    </>
  );
};

export default App;
