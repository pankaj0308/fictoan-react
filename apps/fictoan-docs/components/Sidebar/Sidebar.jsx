//  EXTERNAL DEPS
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

//  INTERFACE
import {
    HRule,
    SidebarFooter,
    SidebarHeader,
    SidebarItem,
    SidebarItemIcon,
    SidebarItemText,
    SidebarWrapper,
    Text,
} from "fictoan-react";

// COMPONENTS
import { sidebarOverviewData, sidebarFormsData, sidebarComponentsData, sidebarStartData } from "./SidebarData";
import { SidebarStyled } from "./Sidebar.styled";

// ASSETS
import ThemeSwitchIcon from "../../assets/icons/theme.svg";
import FictoanLogo from "../../assets/images/logo.svg";
import FictoanIcon from "../../assets/images/logomark.svg";

const Sidebar = ({ toggleTheme, isVisible, setIsSidebarVisible }) => {
    const [sidebarState, setSidebarState] = useState("");

    const router = useRouter();
    const pathName = router.asPath.substring(1);
    const headerOnClick = () => {
        setSidebarState(sidebarState === "collapsed" ? "" : "collapsed");
    };

    return (
        <SidebarWrapper
            id="docs-sidebar"
            className={`${sidebarState === "collapsed" ? "collapsed" : ""} ${isVisible ? "visible" : ""}`}
        >
            <SidebarStyled>
                <SidebarHeader isSticky onClick={headerOnClick}>
                    <div className="header-logo">
                        <FictoanLogo />
                    </div>

                    <div className="header-icon">
                        <FictoanIcon />
                    </div>
                </SidebarHeader>

                {/*  COMPONENTS  =============================================  */}
                {sidebarStartData.map((item) => (
                    <Link href={item.path} key={item.title}>
                        <SidebarItem className={pathName === item.path.substring(1) && `active-link`}>
                            <SidebarItemIcon iconType="stroked">{item.icon}</SidebarItemIcon>

                            <SidebarItemText weight="400" linkText={item.title} />
                        </SidebarItem>
                    </Link>
                ))}

                <HRule kind="tertiary" marginTop="micro" marginBottom="micro" />

                {/*  BASICS  =================================================  */}

                {/*  /////////////////////////////////////////////////////////  */}
                {/*  COMPONENTS  */}
                {/*  /////////////////////////////////////////////////////////  */}
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked" />
                    <SidebarItemText linkText="OVERVIEW" weight="600" textColour="slate-60" size="small" />
                </SidebarItem>

                {sidebarOverviewData.map((item) => (
                    <Link href={item.path} key={item.title}>
                        <SidebarItem className={pathName === item.path.substring(1) && `active-link`}>
                            <SidebarItemIcon iconType="stroked">{item.icon}</SidebarItemIcon>

                            <SidebarItemText weight="400" linkText={item.title} />
                        </SidebarItem>
                    </Link>
                ))}

                <HRule kind="tertiary" marginTop="micro" marginBottom="micro" />

                {/*  /////////////////////////////////////////////////////////  */}
                {/*  FORM  */}
                {/*  /////////////////////////////////////////////////////////  */}
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked" />

                    <SidebarItemText linkText="FORM" weight="600" textColour="slate-60" size="small" />
                </SidebarItem>

                {sidebarFormsData.map((item,index) => (
                    <Link href={item.path} key={index}>
                        <SidebarItem className={pathName === item.path.substring(1) && `active-link`}>
                            <SidebarItemIcon iconType="stroked">{item.icon}</SidebarItemIcon>

                            <SidebarItemText weight="400" linkText={item.title} />
                        </SidebarItem>
                    </Link>
                ))}

                <HRule kind="tertiary" marginTop="micro" marginBottom="micro" />

                {/*  /////////////////////////////////////////////////////////  */}
                {/*  COMPONENTS  */}
                {/*  /////////////////////////////////////////////////////////  */}
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked" />

                    <SidebarItemText linkText="COMPONENTS" weight="600" textColour="slate-60" size="small" />
                </SidebarItem>

                {sidebarComponentsData.map((item,index) => (
                    <Link href={item.path} key={index}>
                        <SidebarItem className={pathName === item.path.substring(1) && `active-link`}>
                            <SidebarItemIcon iconType="stroked">{item.icon}</SidebarItemIcon>

                            <SidebarItemText weight="400" linkText={item.title} />
                        </SidebarItem>
                    </Link>
                ))}

                {/*  FOOTER  =================================================  */}
                <SidebarFooter>
                    <SidebarItem onClick={toggleTheme}>
                        <SidebarItemIcon iconType="stroked">
                            <ThemeSwitchIcon />
                        </SidebarItemIcon>

                        <SidebarItemText weight="400" linkText="Theme" />
                    </SidebarItem>
                </SidebarFooter>
            </SidebarStyled>
        </SidebarWrapper>
    );
};

export default Sidebar;
