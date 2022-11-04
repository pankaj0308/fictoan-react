const path = require("path");

module.exports = {
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.mjs$/,
            include: /node_modules/,
            type: "javascript/auto",
        });
        config.module.rules.push({
            test: /\.svg$/i,
            type: "asset",
            resourceQuery: /url/, // *.svg?url
        });
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: { and: [/\.(js|ts)x?$/] },
            resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
            use: ["@svgr/webpack"],
        });
        return config;
    },
    pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
};
