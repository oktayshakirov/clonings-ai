import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Button,
  Container,
} from '@chakra-ui/react';

const FAQSection = () => {
  return (
    <Container maxW="70%" py="50px">
      <Heading mb="40px" textAlign="center" fontSize="3xl">
        Frequently Asked Questions
      </Heading>
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              How do I get started?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb="20px">
            Simply create your account, and you're halfway there. Our intuitive platform guides...
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Is it really zero work?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb="50px">
           answer ...
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Can I control what my clone says?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb="50px">
           answer ...
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              What's the conversion rate from Coins to USD?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb="50px">
          answer ...
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              What about privacy?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb="50px">
          answer ...
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
             How soon can i start earning ?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb="50px">
          answer ...
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Can i delete my clone anytime i want ?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb="50px">
          answer ...
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              How do payouts work ?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb="50px">
          answer ...
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Box textAlign="center" mt={6}>
        <Button         
        bg="buttonPrimary"
        color="buttonPrimaryText"
        size="2xl" 
        borderRadius="full"
        fontSize="20px"
        px="32px"
        py="16px">VIEW ALL</Button>
      </Box>
    </Container>
  );
};

export default FAQSection;
