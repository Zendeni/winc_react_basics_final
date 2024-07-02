import { Box, Image, Text, Button, Input } from "@chakra-ui/react";
import { data } from "../utils/data";
import { useState } from "react";

const RecipeListPage = ({ onRecipeSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState(data.hits);

  const handleRecipeClick = (recipe) => {
    onRecipeSelect(recipe);
  };

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = data.hits.filter((hit) => {
      const recipe = hit.recipe;
      return (
        recipe.label.toLowerCase().includes(term) ||
        recipe.healthLabels.some((label) => label.toLowerCase().includes(term))
      );
    });
    setFilteredRecipes(filtered);
  };

  return (
    <Box>
      <Text fontSize="2xl" fontWeight="bold" color="#477feb">
        Winc Recipe Checker
      </Text>
      <Input
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={handleSearch}
        mb={4}
      />
      {filteredRecipes.map((hit, index) => {
        const recipe = hit.recipe;
        return (
          <Box
            key={recipe.label}
            border="1px solid gray"
            borderRadius="md"
            p={4}
            mb={4}
          >
            <Text fontSize="2xl">{recipe.label}</Text>
            <Image
              src={recipe.image}
              alt={recipe.label}
              boxSize="200px"
              objectFit="cover"
            />
            {recipe.dietLabels.length > 0 && (
              <Text>Diet Label: {recipe.dietLabels.join(", ")}</Text>
            )}
            {recipe.cautions.length > 0 && (
              <Text>Cautions: {recipe.cautions.join(", ")}</Text>
            )}
            <Text>Meal Type: {recipe.mealType.join(", ")}</Text>
            <Text>Dish Type: {recipe.dishType.join(", ")}</Text>
            {recipe.healthLabels.includes("Vegan") && <Text>Vegan</Text>}
            {recipe.healthLabels.includes("Vegetarian") && (
              <Text>Vegetarian</Text>
            )}
            <Button mt={2} onClick={() => handleRecipeClick(recipe)}>
              View Recipe
            </Button>
          </Box>
        );
      })}
    </Box>
  );
};

export default RecipeListPage;
