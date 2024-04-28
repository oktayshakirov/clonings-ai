import { Box, Button, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";

const SectionGetStarted = () => {
    return (
        <Box position="relative" width="80%">
            <Image src="/images/Banner.png" width="100%" />

            <Flex
                position="absolute"
                top="0"
                left="400px"
                right="0"
                bottom="0"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                color="primary"
            >
                <Box maxW="650px">
                    <Heading mb="30px" size="2xl">
                        Ready to Multiply Your Influence and Earnings?
                    </Heading>
                    <Text fontSize="xl" mb="40px">
                        Join Clonings.ai today. The future is not just coming; it's here, and it's yours to seize.
                    </Text>
                    <Button color="primaryButtonText" _hover={{ bg: "none" }} variant="outline" size="lg">
                        GET STARTED
                    </Button>
                </Box>

                <Box
                    position="absolute"
                    left="-100px"
                    bottom="50px"
                    bg="primary"
                    borderRadius="lg"
                    p="20px"
                    color="highlightedTextTercer"
                    fontWeight="700"
                    boxShadow="lg"
                >
                    <VStack align="flex-start">
                        <Text>Earning</Text>
                        <Text as="span" fontSize="2xl">
                            $1800
                        </Text>
                    </VStack>
                </Box>
            </Flex>
        </Box>
    );
};

export default SectionGetStarted;
