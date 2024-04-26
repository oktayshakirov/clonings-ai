import { Flex } from "@chakra-ui/react";
import React from "react";


const SectionIntro = React.lazy(() => import("./SectionIntro"));


const LandingPage: React.FC = () => {
    return (
        <Flex
            direction="column"
            alignItems="center"
            alignContent="center"
            textAlign={{ base: "center", lg: "left" }}
            w={"100%"}
        >
            <SectionIntro />
        </Flex>
    );
};

export default LandingPage;