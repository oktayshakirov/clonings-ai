import { Box, Flex, Text, Button, Image, VStack } from '@chakra-ui/react';

function SectionLearnMore() {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      align="center"
      justify="space-between"
      px="50px" 
      height="80vh"
    >
      <Box
        flex="1"
        position="relative" 
      >
        <Image
          src="/images/Monetization.png"
          maxWidth="100%" 
        />
      </Box>

      <VStack
        flex="1"
        spacing="20px" 
        align="flex-start"
      >
        <Text fontSize="45px" fontWeight="600" color="highlightedTextTercer">
          Clone Yourself with AI & Earn Effortlessly
        </Text>
        <Text fontSize="17px">
          Dream of being everywhere at once? 
          Clonings.ai makes it happen. Clone yourself, let your digital twin work for you, and enjoy effortless earnings. 
          No work, just gains. Sit back and watch the $$$ come in with Clonings.ai, your hassle-free platform to monetize your content.
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
          LEARN MORE
        </Button>
      </VStack>
    </Flex>
  );
}

export default SectionLearnMore;
