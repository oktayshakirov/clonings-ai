import {  Text, Button, Flex, Badge } from '@chakra-ui/react';

function SectionIntro() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      h="100vh" 
      width="100%"
      bgImage="url('/images/IntroBG.png')"
      bgSize="cover"
    >


      <Text fontSize="48px" fontWeight="600" color="highlightedTextTercer" textAlign="center" mb="5px">
        Welcome to the first AI avatar 
      </Text>

      <Flex align="center" justify="center" fontSize="48px" fontWeight="600" color="highlightedTextTercer" mb="15px">
        Marketplace 
        <Badge 
          ml="15px" 
          bg="buttonPrimary"
          color="primary"
          px="10px" 
          py="10px" 
          borderRadius="2xl"
          fontSize="30px"
        >
          Clonings.ai
        </Badge>
      </Flex>

      <Text fontSize="24px" fontWeight="600" color="highlighted" mb="32px">
        Where Your Influence Creates Unlimited $$$
      </Text>

      <Button 
        bg="buttonPrimary"
        color="buttonPrimaryText"
        size="2xl" 
        borderRadius="full"
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
