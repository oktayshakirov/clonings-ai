import { Badge, Button, Flex, Text, VStack } from "@chakra-ui/react";
import IntroBackground from "/public/images/IntroBackground.png";

const SectionIntro = () => {
    return (
        <Flex
            direction="column"
            align="center"
            justify="center"
            h="100vh"
            width="100%"
            bgImage={`url(${IntroBackground})`}
            bgSize="cover"
            bgPos="top"
            pb="150px"
        >
            <VStack w={{ base: "70%", md: "50%" }} pb="20px">
                <Text
                    fontSize={{ base: "30px", md: "48px" }}
                    fontWeight="600"
                    color="highlightedTextTercer"
                    textAlign="center"
                    mb="5px"
                >
                    Welcome to the first AI avatar Marketplace{" "}
                    <Badge
                        ml={{ base: "0", md: "15px" }}
                        bg="buttonPrimary"
                        _hover={{ bg: "buttonPrimaryHover" }}
                        color="primary"
                        p="10px"
                        borderRadius="2xl"
                        fontSize={{ base: "20px", md: "30px" }}
                    >
                        Clonings.ai
                    </Badge>
                </Text>

                <Text
                    fontSize={{ base: "17px", md: "24px" }}
                    fontWeight="600"
                    color="highlighted"
                    mb="15px"
                    textAlign="center"
                >
                    Where Your Influence Creates Unlimited $$$
                </Text>

                <Button
                    bg="buttonPrimary"
                    _hover={{ bg: "buttonPrimaryHover" }}
                    color="buttonPrimaryText"
                    size={{ base: "md", md: "2xl" }}
                    borderRadius="full"
                    fontSize={{ base: "15px", md: "20px" }}
                    px="32px"
                    py="16px"
                >
                    GET STARTED
                </Button>
            </VStack>
        </Flex>
    );
};

export default SectionIntro;
