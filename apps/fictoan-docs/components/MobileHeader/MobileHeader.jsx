// EXTERNAL DEPS
import React from "react";

// COMPONENTS
import { MobileHeaderStyled } from "./MobileHeader.styled";

// ASSETS
import FictoanLogo from "../../assets/images/logo.svg";

const MobileHeader = (props) => {
    return (
        <MobileHeaderStyled>
            <div className="menu-toggle" onClick={props.toggleSidebarVisibility}>
                <h5>&mdash;</h5>
                <h5>&ndash;</h5>
            </div>

            <FictoanLogo />
        </MobileHeaderStyled>
    );
};

export default MobileHeader;
