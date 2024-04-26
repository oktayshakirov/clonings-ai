import { Box, Flex, Text, Button, Image, VStack } from '@chakra-ui/react';

function SectionLearnMore() {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      align="center"
      justify="space-between"
      px="6" 
      py="10" 
      height="60vh"
    >
      <Box
        flex="1"
        position="relative" 
      >
        <Image
          src="/images/.png"
          maxWidth="100%" 
          height="auto"
          borderRadius="full"
        />
      </Box>

      <VStack
        flex="1"
        spacing="4" 
        align="flex-start"
        pl={{ md: '12' }} 
      >
        <Text
          fontSize="2xl" 
          fontWeight="bold"
          color="blue.800"
        >
          Clone Yourself with AI & Earn Effortlessly
        </Text>
        <Text
          fontSize="md" 
          color="gray.600"
        >
          Dream of being everywhere at once? Clonings.ai makes it happen. Clone yourself, let your digital twin work for you, and enjoy effortless earnings. No work, just gains. Sit back and watch the $$$ come in with Clonings.ai, your hassle-free platform to monetize your content.
        </Text>
        <Button 
        colorScheme="blue" 
        size="lg" 
        borderRadius="32px"
        fontSize="20px"
        px="32px"
        py="16px"
      >
          LEARN MORE
        </Button>
      </VStack>
    </Flex>
  );
}

export default SectionLearnMore;
