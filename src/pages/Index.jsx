import { Container, Text, VStack, Box, Heading, Button, Image, Flex } from "@chakra-ui/react";
import { FaDog, FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} width="full">
        <Heading as="h1" size="2xl" textAlign="center" color="brand.700">
          Welcome to Dog Paradise
        </Heading>
        <Text fontSize="xl" textAlign="center" color="gray.600">
          Find your perfect furry friend today!
        </Text>
        <Box boxSize="sm">
          <Image src="/images/hero-dog.jpg" alt="Hero Dog" borderRadius="lg" />
        </Box>
        <Flex direction={{ base: "column", md: "row" }} spacing={4} mt={8}>
          <Button leftIcon={<FaDog />} colorScheme="teal" size="lg" m={2}>
            Browse Dogs
          </Button>
          <Button leftIcon={<FaShoppingCart />} colorScheme="orange" size="lg" m={2}>
            Shop Accessories
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;