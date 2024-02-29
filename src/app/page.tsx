'use client';

import Browser from "@/app/Applications/Browser/Browser";
import Demo from "@/app/Applications/Demo/Demo";
import SimpleText from "@/app/Applications/SimpleText/SimpleText";
import PlatinumDesktop from "@/app/SystemFolder/SystemResources/Desktop/PlatinumDesktop";
import {PlatinumDesktopProvider} from "@/app/SystemFolder/SystemResources/Desktop/PlatinumDesktopAppManagerContext";
import React from "react";

import AppearanceManager from "./SystemFolder/ControlPanels/AppearanceManager/AppearanceManager";

export default function Home() {
    return (
        <PlatinumDesktopProvider>
            <PlatinumDesktop>
                <AppearanceManager/>
                <Demo/>
                <Browser/>
                <SimpleText/>
            </PlatinumDesktop>
        </PlatinumDesktopProvider>
    );
};
