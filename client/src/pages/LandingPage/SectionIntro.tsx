
import { Box, Text } from "@chakra-ui/react";
import React from "react";


const SectionIntro: React.FC = () => {
    return (
        <Box as={"section"} id={"head"} p={[5, 10]} w={"100%"} maxW={"110rem"}>
          <Text>Section intro</Text> 
        </Box>
    );
};

export default SectionIntro;