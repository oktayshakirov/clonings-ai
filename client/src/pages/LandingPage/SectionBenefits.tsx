import { Box, Flex, Text } from "@chakra-ui/react";
import {
    AiOutlineAudio,
    AiOutlineBarChart,
    AiOutlineDeploymentUnit,
    AiOutlineDollar,
    AiOutlineGift,
    AiOutlineRocket,
    AiOutlineSetting,
} from "react-icons/ai";

const SectionBenefits = () => {
    const benefits = [
        {
            title: "Quick and Easy Setup",
            description: "Get started in no time, with no tech hassles.",
            Icon: AiOutlineSetting,
        },
        {
            title: "Zero Maintenance",
            description: "Once set up, your clone takes over. Your role? Just watch your earnings grow.",
            Icon: AiOutlineRocket,
        },
        {
            title: "Direct Earnings",
            description: "Charge followers per message, making every interaction.",
            Icon: AiOutlineDollar,
        },
        {
            title: "AI-Powered Sales",
            description: "Sell pay-per-view content with ease. The AI handles everything.",
            Icon: AiOutlineDeploymentUnit,
        },
        {
            title: "Effortless Monetization",
            description: "Your influence, now with zero effort. Welcome to the future of passive income.",
            Icon: AiOutlineGift,
        },
        {
            title: "Voice Cloning",
            description: "Add a personal touch with your unique voice, making interactions even more special.",
            Icon: AiOutlineAudio,
        },
        {
            title: "Passive Income",
            description: "The dream of earning without working? Achieved.",
            Icon: AiOutlineBarChart,
        },
    ];

    return (
        <Box py="50px" maxW="90%">
            <Text
                color="highlightedTextTercer"
                fontSize={{ base: "30px", md: "45px" }}
                fontWeight="600"
                textAlign="center"
                mb="50px"
            >
                Benefits for Creators
            </Text>
            <Flex wrap="wrap" justify="center" align="center" gap="25px" px="10px">
                {benefits.map((benefit) => (
                    <Flex
                        key={benefit.title}
                        direction="column"
                        align="center"
                        justify="center"
                        p="30px"
                        borderRadius="lg"
                        border="2px solid"
                        borderColor="highlighted"
                        bg="primary"
                        _hover={{ bg: "buttonPrimary", color: "primary", cursor: "pointer" }}
                        transition="background-color 0.3s, color 0.3s"
                        role="group"
                        maxW="300px"
                        h="250px"
                    >
                        <Box
                            as={benefit.Icon}
                            boxSize="70px"
                            color="primary"
                            borderRadius="full"
                            p="10px"
                            bg="buttonPrimary"
                            _groupHover={{
                                bg: "primary",
                                color: "buttonPrimary",
                            }}
                        />
                        <Text
                            fontWeight="500"
                            mt="12px"
                            color="highlightedTextTercer"
                            _groupHover={{ color: "primary" }}
                        >
                            {benefit.title}
                        </Text>
                        <Text
                            textAlign="center"
                            mt="8px"
                            fontSize="15px"
                            color="highlightedTextTercer"
                            _groupHover={{ color: "primary" }}
                        >
                            {benefit.description}
                        </Text>
                    </Flex>
                ))}
            </Flex>
        </Box>
    );
};

export default SectionBenefits;
