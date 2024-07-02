import {
  Box,
  Image,
  Text,
  Button,
  VStack,
  Heading,
  Container,
  UnorderedList,
  ListItem,
  SimpleGrid,
  Badge,
} from "@chakra-ui/react";

const RecipePage = ({ recipe, onBackClick }) => {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <Button onClick={onBackClick} mb={4}>
          Back to Recipes
        </Button>
        <Heading size="2xl" textAlign="center">
          {recipe.label}
        </Heading>
        <Image
          src={recipe.image}
          alt={recipe.label}
          maxH="400px"
          objectFit="cover"
          borderRadius="md"
          mx="auto"
        />

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Box>
            <VStack align="start" spacing={4}>
              <Text fontWeight="bold">
                Meal Type: {recipe.mealType.join(", ")}
              </Text>
              <Text fontWeight="bold">
                Dish Type: {recipe.dishType.join(", ")}
              </Text>
              <Text fontWeight="bold">
                Total Cooking Time: {recipe.totalTime} minutes
              </Text>
              {recipe.dietLabels.length > 0 && (
                <Text fontWeight="bold">
                  Diet Label: {recipe.dietLabels.join(", ")}
                </Text>
              )}
              {recipe.healthLabels.length > 0 && (
                <Box>
                  <Text fontWeight="bold">Health Labels:</Text>
                  <Box mt={2}>
                    {recipe.healthLabels.map((label, index) => (
                      <Badge key={index} mr={2} mb={2} colorScheme="green">
                        {label}
                      </Badge>
                    ))}
                  </Box>
                </Box>
              )}
              {recipe.cautions.length > 0 && (
                <Box>
                  <Text fontWeight="bold">Cautions:</Text>
                  <Box mt={2}>
                    {recipe.cautions.map((caution, index) => (
                      <Badge key={index} mr={2} mb={2} colorScheme="red">
                        {caution}
                      </Badge>
                    ))}
                  </Box>
                </Box>
              )}
            </VStack>
          </Box>

          <Box>
            <VStack align="start" spacing={4}>
              <Heading size="md">Ingredients:</Heading>
              <UnorderedList spacing={2}>
                {recipe.ingredientLines.map((ingredient, index) => (
                  <ListItem key={index}>{ingredient}</ListItem>
                ))}
              </UnorderedList>
              <Text fontWeight="bold">Servings: {recipe.yield}</Text>
            </VStack>
          </Box>
        </SimpleGrid>

        <Box>
          <Heading size="md" mb={4}>
            Total Nutrients:
          </Heading>
          <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4}>
            <Text>
              Energy: {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)}{" "}
              kcal
            </Text>
            <Text>
              Protein: {Math.round(recipe.totalNutrients.PROCNT.quantity)} g
            </Text>
            <Text>Fat: {Math.round(recipe.totalNutrients.FAT.quantity)} g</Text>
            <Text>
              Carbs: {Math.round(recipe.totalNutrients.CHOCDF.quantity)} g
            </Text>
            <Text>
              Cholesterol: {Math.round(recipe.totalNutrients.CHOLE.quantity)} mg
            </Text>
            <Text>
              Sodium: {Math.round(recipe.totalNutrients.NA.quantity)} mg
            </Text>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default RecipePage;
