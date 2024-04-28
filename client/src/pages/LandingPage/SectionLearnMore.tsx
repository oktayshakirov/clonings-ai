import { Box, Button, Flex, Image, Text, VStack } from "@chakra-ui/react";
import Shadow from "/public/images/Shadow.png";

const SectionLearnMore = () => {
    return (
        <Flex
            w="100%"
            bgSize="cover"
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
            px={{ base: "10px", md: "150px" }}
            height={{ base: "auto", md: "90vh" }}
            bgImage={`url(${Shadow})`}
        >
            <Box flex="1" position="relative">
                <Image src="/images/Monetization.png" />
            </Box>

            <VStack flex="1" spacing="30px" align={{ base: "center", md: "flex-start" }} maxWidth="700px">
                <Text fontSize={{ base: "30px", md: "50px" }} fontWeight="600" color="highlightedTextTercer">
                    Clone Yourself with AI & Earn Effortlessly
                </Text>
                <Text fontSize="17px">
                    Dream of being everywhere at once? Clonings.ai makes it happen. Clone yourself, let your digital
                    twin work for you, and enjoy effortless earnings. No work, just gains. Sit back and watch the $$$
                    come in with Clonings.ai, your hassle-free platform to monetize your content.
                </Text>
                <Button
                    bg="buttonPrimary"
                    _hover={{ bg: "buttonPrimaryHover" }}
                    color="buttonPrimaryText"
                    size={{ base: "lg", md: "2xl" }}
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
};

export default SectionLearnMore;
