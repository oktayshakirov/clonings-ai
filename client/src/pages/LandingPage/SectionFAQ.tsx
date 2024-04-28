import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    Container,
    Heading,
} from "@chakra-ui/react";
import IntroBackground from "/public/images/FAQ_Background.png";

type FAQItemProps = {
    question: string;
    answer: string;
};

const FAQItem = ({ question, answer }: FAQItemProps) => (
    <AccordionItem>
        <AccordionButton>
            <Box flex="1" textAlign="left">
                {question}
            </Box>
            <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb="20px">{answer}</AccordionPanel>
    </AccordionItem>
);

const FAQSection = () => {
    return (
        <Box width="100%" bgImage={`url(${IntroBackground})`} backgroundSize="cover">
            <Container maxW="70%" py="50px" mx="auto">
                <Heading
                    color="highlightedTextTercer"
                    fontSize={{ base: "30px", md: "45px" }}
                    fontWeight="600"
                    textAlign="center"
                    mb="50px"
                >
                    Frequently Asked Questions
                </Heading>
                <Accordion allowToggle>
                    <FAQItem
                        question="How do I get started?"
                        answer="Simply create your account, and you're halfway there. Our intuitive platform guides..."
                    />
                    <FAQItem question="Is it really zero work?" answer="answer ..." />
                    <FAQItem question="Can I control what my clone says?" answer="answer ..." />
                    <FAQItem question="What's the conversion rate from Coins to USD?" answer="answer ..." />
                    <FAQItem question="What about privacy?" answer="answer ..." />
                    <FAQItem question="How soon can i start earning ?" answer="answer ..." />
                    <FAQItem question="Can i delete my clone anytime i want ?" answer="answer ..." />
                    <FAQItem question="How do payouts work ?" answer="answer ..." />
                </Accordion>
                <Box textAlign="center" mt="50px">
                    <Button
                        bg="buttonPrimary"
                        _hover={{ bg: "buttonPrimaryHover" }}
                        color="buttonPrimaryText"
                        size="2xl"
                        borderRadius="full"
                        fontSize="20px"
                        px="32px"
                        py="16px"
                    >
                        VIEW ALL
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default FAQSection;
