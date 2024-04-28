import { Box, Button, Flex, Image } from "@chakra-ui/react";

const SectionGetStarted = () => {
    return (
        <Box position="relative" width={{ base: "100%", md: "80%" }} margin="0 auto">
            <Image src="/images/Banner.png" width="100%" />
            <Flex position="absolute" top="70%" left="70%" transform="translate(-50%, -50%)" color="primary">
                <Button
                    color="primaryButtonText"
                    _hover={{ bg: "highlighted" }}
                    variant="outline"
                    size={{ base: "sm", md: "lg" }}
                >
                    GET STARTED
                </Button>
            </Flex>
        </Box>
    );
};

export default SectionGetStarted;
