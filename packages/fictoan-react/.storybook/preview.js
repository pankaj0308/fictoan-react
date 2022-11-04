import React from 'react';
import { ThemeProvider } from 'styled-components';
import { FictoanTheme } from "../../fictoan-react/src/styles/theme";;
export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        expanded: false,
        sort: 'requiredFirst',
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}

export const decorators = [
    (Story) => (
        <ThemeProvider theme={FictoanTheme} >
            <Story />
        </ThemeProvider>
    ),
];
