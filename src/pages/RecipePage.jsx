// src/components/RecipePage.jsx
import { Box, Image, Text, Button } from "@chakra-ui/react";

const RecipePage = ({ recipe, onBackClick }) => {
  return (
    <Box>
      <Button onClick={onBackClick}>Back to Recipes</Button>
      <Text fontSize="3xl">{recipe.label}</Text>
      <Image
        src={recipe.image}
        alt={recipe.label}
        boxSize="400px"
        objectFit="cover"
      />

      {/* Meal Type */}
      <Text>Meal Type: {recipe.mealType.join(", ")}</Text>

      {/* Dish Type */}
      <Text>Dish Type: {recipe.dishType.join(", ")}</Text>

      {/* Total Cooking Time */}
      <Text>Total Cooking Time: {recipe.totalTime} minutes</Text>

      {/* Diet Label */}
      {recipe.dietLabels.length > 0 && (
        <Text>Diet Label: {recipe.dietLabels.join(", ")}</Text>
      )}

      {/* Health Labels */}
      {recipe.healthLabels.length > 0 && (
        <Text>Health Labels: {recipe.healthLabels.join(", ")}</Text>
      )}

      {/* Cautions */}
      {recipe.cautions.length > 0 && (
        <Text>Cautions: {recipe.cautions.join(", ")}</Text>
      )}

      {/* Ingredients */}
      <Text>Ingredients:</Text>
      <ul>
        {recipe.ingredientLines.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      {/* Servings */}
      <Text>Servings: {recipe.yield}</Text>

      {/* Total Nutrients */}
      <Text>Total Nutrients:</Text>
      <ul>
        <li>Energy: {recipe.totalNutrients.ENERC_KCAL.quantity} kcal</li>
        <li>Protein: {recipe.totalNutrients.PROCNT.quantity} g</li>
        <li>Fat: {recipe.totalNutrients.FAT.quantity} g</li>
        <li>Carbs: {recipe.totalNutrients.CHOCDF.quantity} g</li>
        <li>Cholesterol: {recipe.totalNutrients.CHOLE.quantity} mg</li>
        <li>Sodium: {recipe.totalNutrients.NA.quantity} mg</li>
      </ul>
    </Box>
  );
};

export default RecipePage;
