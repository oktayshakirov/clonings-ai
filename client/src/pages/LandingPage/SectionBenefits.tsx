import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import {
  AiOutlineSetting,
  AiOutlineRocket,
  AiOutlineDollar,
  AiOutlineDeploymentUnit,
  AiOutlineAudio,
  AiOutlineGift,
  AiOutlineBarChart
} from 'react-icons/ai';

interface BenefitCardProps {
  title: string;
  description: string;
  Icon: React.ElementType;
}

//TODO: Export BenefitCard into seperate component

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description, Icon }) => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      p="30px"
      borderRadius="lg"
      border="2px solid"
      borderColor="highlighted"
      bg="primary"
      _hover={{ bg: "buttonPrimary", color: "primary", cursor: "pointer"  }}
      transition="background-color 0.3s, color 0.3s"
      role="group"
      maxW="300px"
      h="250px"
    >
      <Box
        as={Icon}
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
      <Text fontWeight="500" mt="12px" color="highlightedTextTercer" _groupHover={{ color: "primary" }}>
        {title}
      </Text>
      <Text textAlign="center" mt="8px" fontSize="15px" color="highlightedTextTercer" _groupHover={{ color: "primary" }}>
        {description}
      </Text>
    </Flex>
  );
};

const SectionBenefits: React.FC = () => {
  return (
    <Box py="50px" >
  <Text color="highlightedTextTercer" fontSize="40px" fontWeight="600" textAlign="center" mb="50px">
    Benefits for Creators
  </Text>
  <Flex
    wrap="wrap"
    justify="center"
    align="center"
    gap="25px" 
    px="10px" 
  >
      <BenefitCard
        title="Quick and Easy Setup"
        description="Get started in no time, with no tech hassles."
        Icon={AiOutlineSetting}
      />
      <BenefitCard
        title="Zero Maintenance"
        description="Once set up, your clone takes over. Your role? Just watch your earnings grow."
        Icon={AiOutlineRocket}
      />
      <BenefitCard
        title="Direct Earnings"
        description="Charge followers per message, making every interaction."
        Icon={AiOutlineDollar}
      />
      <BenefitCard
        title="AI-Powered Sales"
        description="Sell pay-per-view content with ease. The AI handles everything."
        Icon={AiOutlineDeploymentUnit}
      />
      <BenefitCard
        title="Effortless Monetization"
        description="Your influence, now with zero effort. Welcome to the future of passive income."
        Icon={AiOutlineGift}
      />
      <BenefitCard
        title="Voice Cloning"
        description="Add a personal touch with your unique voice, making interactions even more special."
        Icon={AiOutlineAudio}
      />
      <BenefitCard
        title="Passive Income"
        description="The dream of earning without working? Achieved."
        Icon={AiOutlineBarChart}
      />
  </Flex>
</Box>


  );
};

export default SectionBenefits;
