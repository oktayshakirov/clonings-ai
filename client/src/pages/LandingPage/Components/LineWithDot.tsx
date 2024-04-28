import { Box, Center, Circle } from "@chakra-ui/react";

const LineWithDot = ({ isDotAbove = false }) => (
    <Center height={isDotAbove ? "40px" : "70px"} position="relative">
        <Box position="absolute" width="2px" height="70px" bgColor="primary" transform="translateX(-50%)" />
        <Circle
            position="absolute"
            size="20px"
            bgColor="primary"
            top={isDotAbove ? "-50%" : "100%"}
            left="50%"
            transform="translate(-50%, -50%)"
        />
    </Center>
);

export default LineWithDot;
