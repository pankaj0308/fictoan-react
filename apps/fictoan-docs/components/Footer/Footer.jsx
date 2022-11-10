//  EXTENRAL DEPS
import React from "react";

// INTERFACE
import {
    Element,
    Row,
    Portion,
    Text
} from "fictoan-react";

//  COMPONENTS
import { FooterStyled } from "./Footer.styled";

//  ASSETS
import icon from "../../assets/images/icon-ft-on-dp.svg";


const Footer = () => {
    return (
        <FooterStyled>
            <Row sidePadding="huge" marginTop="small">
                <Portion desktopSpan="one-third">
                    <Element as="img" src={icon} />
                </Portion>

                <Portion desktopSpan="two-third">
                    <Text>
                        Crucible is Setu’s internal design and development system that lays emphasis on rapidly
                        building, shipping and iterating over deliberating on assumptions.
                    </Text>
                </Portion>
            </Row>
        </FooterStyled>
    );
}

export default Footer;