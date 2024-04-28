import { Flex } from "@chakra-ui/react";
import React from "react";

const SectionIntro = React.lazy(() => import("./SectionIntro"));
const SectionLearnMore = React.lazy(() => import("./SectionLearnMore"));
const SectionBenefits = React.lazy(() => import("./SectionBenefits"));
const SectionHowItWorks = React.lazy(() => import("./SectionHowItWorks"));
const SectionFAQ = React.lazy(() => import("./SectionFAQ"));
const SectionGetStarted = React.lazy(() => import("./SectionGetStarted"));

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
            <SectionLearnMore />
            <SectionBenefits />
            <SectionHowItWorks />
            <SectionFAQ />
            <SectionGetStarted />
        </Flex>
    );
};

export default LandingPage;
