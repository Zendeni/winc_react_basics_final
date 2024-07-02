import {
  Box,
  Image,
  Text,
  Button,
  Input,
  SimpleGrid,
  VStack,
  Heading,
  Container,
} from "@chakra-ui/react";
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
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <Box bg="#477feb" p={4} borderRadius="md">
          <Heading color="white" textAlign="center">
            Winc Recipe Checker
          </Heading>
        </Box>
        <Input
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={handleSearch}
          size="lg"
        />
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {filteredRecipes.map((hit) => {
            const recipe = hit.recipe;
            return (
              <Box
                key={recipe.label}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="md"
              >
                <Image
                  src={recipe.image}
                  alt={recipe.label}
                  h="200px"
                  w="100%"
                  objectFit="cover"
                />
                <VStack p={4} align="start" spacing={2}>
                  <Heading size="md">{recipe.label}</Heading>
                  {recipe.dietLabels.length > 0 && (
                    <Text fontWeight="bold">
                      Diet: {recipe.dietLabels.join(", ")}
                    </Text>
                  )}
                  {recipe.cautions.length > 0 && (
                    <Text color="red.500">
                      Cautions: {recipe.cautions.join(", ")}
                    </Text>
                  )}
                  <Text>Meal Type: {recipe.mealType.join(", ")}</Text>
                  <Text>Dish Type: {recipe.dishType.join(", ")}</Text>
                  {recipe.healthLabels.includes("Vegan") && (
                    <Text color="green.500">Vegan</Text>
                  )}
                  {recipe.healthLabels.includes("Vegetarian") && (
                    <Text color="green.500">Vegetarian</Text>
                  )}
                  <Button
                    colorScheme="blue"
                    onClick={() => handleRecipeClick(recipe)}
                  >
                    View Recipe
                  </Button>
                </VStack>
              </Box>
            );
          })}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default RecipeListPage;
