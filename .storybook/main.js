module.exports = {
    stories: ['../packages/**/src/**/**/*.stories.tsx', "../packages/**/src/**/**/*.stories.mdx"],
    addons: ['@storybook/addon-controls', '@storybook/addon-docs', '@storybook/addon-essentials'],
    typescript: {
        check: false,
        checkOptions: {},
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
        },
    },
};
