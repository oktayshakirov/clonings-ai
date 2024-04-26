/* eslint-disable react-hooks/exhaustive-deps */

import FullscreenLoader from "#/components/Loaders/FullscreenLoader";
import { Box } from "@chakra-ui/react";
import React, { Suspense } from "react";
import { Outlet} from "react-router-dom";



const MainLayout: React.FC = () => {


    return (
        <Suspense fallback={<FullscreenLoader />}>
                    <Box p="15px">
                        <Outlet />
                    </Box>

        </Suspense>
    );
};

export default MainLayout;
