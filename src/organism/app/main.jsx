import React from "react";
import { defaultSingleFixture } from '../../constants/default.const';

import AppDetails from "./details";
import { AppMainContainer } from '../../atom'

const Main = () => {
    return (
        <AppMainContainer>
            <AppDetails fixture={defaultSingleFixture[0]} />
        </AppMainContainer>
    );
};

export default Main;
