// External deps
import React from "react";

// Local components
import { MobileHeaderStyled } from "./MobileHeader.styled";

// Local assets
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
