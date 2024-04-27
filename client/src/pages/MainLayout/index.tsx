import FullscreenLoader from "#/components/Loaders/FullscreenLoader";
import React, { Suspense } from "react";
import { Outlet} from "react-router-dom";



const MainLayout: React.FC = () => {


    return (
        <Suspense fallback={<FullscreenLoader />}>
            <Outlet />
        </Suspense>
    );
};

export default MainLayout;
