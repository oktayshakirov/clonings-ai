import { Box, Heading, Text, Button, Image, Flex } from '@chakra-ui/react';

const SectionGetStarted = () => {

  return (
    <Box position="relative" width="full">
      <Image src="/images/Banner.png" width="100%" height="auto" />

      <Flex
        position="absolute"
        top="0"
        left="400"
        right="0"
        bottom="0"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        color="primary"
      >
        <Box maxW="700px" textAlign="center">
          <Heading mb="30px" size="2xl">
            Ready to Multiply Your Influence and Earnings?
          </Heading>
          <Text fontSize="xl" mb="40px">
            Join Clonings.ai today. The future is not just coming; it's here, and it's yours to seize.
          </Text>
          <Button colorScheme="blue" size="lg">
            GET STARTED
          </Button>
        </Box>

        <Box
          position="absolute"
          left="150px"
          bottom="100px"
          bg="primary"
          borderRadius="lg"
          p="20px"
          color="highlightedTextTercer"
          fontWeight="bold"
          boxShadow="lg"
        >
          Earning
          <Box as="span" fontSize="2xl" ml="10px">
            $1800
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default SectionGetStarted;
