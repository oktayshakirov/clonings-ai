import React from 'react';
import { Box, SimpleGrid, Text, Flex } from '@chakra-ui/react';
import {
  AiOutlineSetting,
  AiOutlineRocket,
  AiOutlineDollar,
  AiOutlineBulb,
  AiOutlineAudio,
  AiOutlineGift,
} from 'react-icons/ai';

interface BenefitCardProps {
  title: string;
  description: string;
  Icon: React.ElementType;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description, Icon }) => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      p="16px"
      borderRadius="12px"
      border="1px solid"
      borderColor="gray.200"
      bg="white"
      _hover={{ bg: "blue.500", color: "white" }}
      transition="background-color 0.3s, color 0.3s"
      role="group"
      width="100%"
    >
      <Box
        as={Icon}
        boxSize="50px"
        color="white"
        borderRadius="full"
        p="12px"
        bg="blue.500"
        _groupHover={{
          bg: "white",
          color: "blue.500",
        }}
      />
      <Text fontWeight="semibold" mt="12px" _groupHover={{ color: "white" }}>
        {title}
      </Text>
      <Text textAlign="center" mt="8px" fontSize="14px" _groupHover={{ color: "white" }}>
        {description}
      </Text>
    </Flex>
  );
};

const SectionBenefits: React.FC = () => {
  return (
    <Box py="40px" px="24px">
      <Text fontSize="36px" fontWeight="bold" textAlign="center" mb="24px">
        Benefits for Creators
      </Text>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacingX="20px" spacingY="20px">
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
          Icon={AiOutlineBulb}
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
          Icon={AiOutlineGift}
        />
      </SimpleGrid>
    </Box>
  );
};

export default SectionBenefits;
