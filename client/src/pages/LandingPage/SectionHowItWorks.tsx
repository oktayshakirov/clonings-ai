import { Box, Circle, Heading, Stack, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import LineWithDot from "./Components/LineWithDot";

interface StepProps {
    number: string;
    title: string;
    description: string;
    isTextAbove?: boolean;
}

const Step = ({ number, title, description, isTextAbove }: StepProps) => (
    <VStack>
        <Box>
            {isTextAbove && (
                <>
                    <VStack pb="50px">
                        <Text fontSize="20px" color="primary" fontWeight="600" textAlign="center">
                            {title}
                        </Text>
                        <Text color="primary" textAlign="center">
                            {description}
                        </Text>
                    </VStack>
                    <LineWithDot isDotAbove />
                </>
            )}
        </Box>
        <Circle size="150px" bg="primary" color="highlighted">
            <Text fontSize="80px">{number}</Text>
        </Circle>
        <Box>
            {!isTextAbove && (
                <>
                    <LineWithDot />
                    <VStack pt="15px">
                        <Text fontSize="20px" color="primary" fontWeight="600" textAlign="center">
                            {title}
                        </Text>
                        <Text color="primary" textAlign="center">
                            {description}
                        </Text>
                    </VStack>
                </>
            )}
        </Box>
    </VStack>
);

const SectionHowItWorks = () => {
    const isTextAbove = useBreakpointValue({ base: false, xl: true });

    return (
        <Box
            bg="highlighted"
            px="10px"
            py="50px"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="auto"
            w="100%"
        >
            <Heading as="h2" size="xl" color="primary" fontWeight="600" mb="50px" textAlign="center">
                How it Works
            </Heading>
            <Stack direction={{ base: "column", xl: "row" }} align="center" maxWidth="100%">
                <Step
                    number="1"
                    title="Create Your Account"
                    description="Jumpstart your journey with just a few clicks."
                />
                <Step
                    number="2"
                    title="Setup Your Clone"
                    description="Use our user-friendly character builder to craft your clone, mirroring your personality."
                    isTextAbove={isTextAbove}
                />
                <Step
                    number="3"
                    title="Message Pricing"
                    description="Decide how much followers pay per message. You're in control."
                />
                <Step
                    number="4"
                    title="Content Selling"
                    description="Choose the content and its price. Our AI does the selling for you."
                    isTextAbove={isTextAbove}
                />
                <Step
                    number="5"
                    title="Enjoy Passive Income"
                    description="Kick back, relax, and watch your bank account grow."
                />
            </Stack>
        </Box>
    );
};

export default SectionHowItWorks;
