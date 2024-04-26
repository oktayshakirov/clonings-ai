import {  Text, Button, Flex, Badge } from '@chakra-ui/react';

function SectionIntro() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      h="80vh" 
      bgImage="url('/images/.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >


      <Text fontSize="48px" color="navLinkSelected" textAlign="center" mb="32px">
        Welcome to the first AI avatar 
      </Text>

      <Flex align="center" justify="center" fontSize="48px" mb="16px">
        Marketplace 
        <Badge 
          ml="8px" 
          colorScheme="blue" 
          px="8px" 
          py="4px" 
          borderRadius="4px"
          fontSize="20px"
        >
          Clonings.ai
        </Badge>
      </Flex>

      <Text fontSize="24px" color="highlighted" mb="32px">
        Where Your Influence Creates Unlimited $$$
      </Text>

      <Button 
        colorScheme="blue" 
        size="lg" 
        borderRadius="32px"
        fontSize="20px"
        px="32px"
        py="16px"
      >
        GET STARTED
      </Button>


    </Flex>
  );
}

export default SectionIntro;
