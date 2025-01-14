import styled from "styled-components";

import { NotificationItemProps } from "./NotificationItem";


export const NotificationItemStyled = styled.div`
    position         : relative;
    display          : flex;
    width            : 100%;
    background-color : ${(props: NotificationItemProps) => props.theme.notification.generic.bg};
    border-radius    : ${(props: NotificationItemProps) => props.theme.notification.generic.borderRadius};
    border           : 1px solid hsla(0, 0%, 0%, 0.04);
    transition       : all 0.4s;
    box-shadow       : 0  2px  0.2px rgba(0,0,0,0.016), 
                       0  4px  0.8px rgba(0,0,0,0.024),
                       0  6px  2.4px rgba(0,0,0,0.032),
                       0  8px  4.8px rgba(0,0,0,0.040),
                       0 16px  8.0px rgba(0,0,0,0.056),
                       0 24px 16.0px rgba(0,0,0,0.064);

    &::before {
        position      : absolute;
        left          : 0;
        top           : 0;
        width         : 8px;
        height        : 100%;
        content       : "";
        border-radius : 2px 0 0 2px;
    }
    
    &.info {
        background-color : ${(props: NotificationItemProps) => props.theme.notification.kinds.info.bg};
        border           : 1px solid ${(props: NotificationItemProps) => props.theme.notification.kinds.info.border};

        ::before { background-color : ${(props: NotificationItemProps) => props.theme.notification.kinds.info.border}; }
    }

    &.warning {
        background-color : ${(props: NotificationItemProps) => props.theme.notification.kinds.warning.bg};
        border           : 1px solid ${(props: NotificationItemProps) => props.theme.notification.kinds.warning.border};

        ::before { background-color : ${(props: NotificationItemProps) => props.theme.notification.kinds.warning.border}; }
    }

    &.error {
        background-color : ${(props: NotificationItemProps) => props.theme.notification.kinds.error.bg};
        border           : 1px solid ${(props: NotificationItemProps) => props.theme.notification.kinds.error.border};

        ::before { background-color : ${(props: NotificationItemProps) => props.theme.notification.kinds.error.border}; }
    }

    &.success {
        background-color : ${(props: NotificationItemProps) => props.theme.notification.kinds.success.bg};
        border           : 1px solid ${(props: NotificationItemProps) => props.theme.notification.kinds.success.border};

        ::before { background-color : ${(props: NotificationItemProps) => props.theme.notification.kinds.success.border}; }
    }


    & .notification-content {
        color       : ${(props: NotificationItemProps) => props.theme.notification.generic.text};
        font-size   : 14px;
        line-height : 1.1;
        word-break  : break-word;
        margin      : 0 8px;
    }

    &.dismissible .notification-content { margin : 0 24px 0 8px; }

    & .dismiss-button {
        position : absolute;
        top      : 6px;
        right    : 8px;
        width    : 16px;
        height   : 16px;
        opacity  : 0.24;
        cursor   : pointer;
    }

    & .dismiss-button:hover { opacity: 1; }

    & .dismiss-button:before {
        content     : "\\d7";
        font-size   : 24px;
        line-height : 0;
    }

    &.dismissed { transform : translateX(560px); }
`;
