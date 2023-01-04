//  EXTERNAL DEPS
import React, { useState } from "react";

//  INTERFACE
import { ThemeProvider, ContentWrapper } from "fictoan-react";

//  COMPONENTS
import Sidebar from "../components/Sidebar/Sidebar";
import MobileHeader from "../components/MobileHeader/MobileHeader";
import { FictoanLightTheme } from "../styles/Fictoan.light.theme";
import { FictoanDarkTheme } from "../styles/Fictoan.dark.theme";
import { GlobalStyle } from "../styles/Global.styled";
import "../styles/fonts.css";

// UTILS  =====================================================================

// HOOKS  =====================================================================

// CONTEXTS  ==================================================================

// ASSETS  ====================================================================

// DATA  ======================================================================

// TYPES  =====================================================================

function MyApp({ Component, pageProps }) {
    let [currentTheme, setCurrentTheme] = useState("light");

    let [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const toggleTheme = () => {
        if (currentTheme === "light") {
            setCurrentTheme("dark");
        } else {
            setCurrentTheme("light");
        }
    };

    const toggleSidebarVisibility = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    const modifiedPageProps = { ...pageProps, toggleTheme };

    return (
        <ThemeProvider theme={currentTheme === "light" ? FictoanLightTheme : FictoanDarkTheme}>
            <GlobalStyle />

            {/* <Sidebar toggleTheme={toggleTheme} isVisible={isSidebarVisible} setIsSidebarVisible={setIsSidebarVisible} /> */}
            <ContentWrapper>
                <MobileHeader currentTheme={currentTheme} toggleSidebarVisibility={toggleSidebarVisibility} />

                <Component {...modifiedPageProps} />
            </ContentWrapper>
        </ThemeProvider>
    );
}

export default MyApp;
