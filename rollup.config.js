import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import babel, { getBabelOutputPlugin } from "@rollup/plugin-babel";
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer({
    minify: true
});

import pkg from "./package.json";

// const production = !process.env.ROLLUP_WATCH;
const extensions = [".ts", ".tsx", ".js", ".jsx"];

export default [{
    input: "src/index.tsx",
    output: [
        {
            file: pkg.main,
            format: "cjs",
            sourcemap: true,
            exports: "named"
        },
        {
            file: pkg.module,
            format: "es",
            sourcemap: true,
            exports: "named"
        }
    ],
    external: [
        "@types/lodash",
        "@types/react",
        "@types/styled-components",
        "lodash/merge",
        "react",
        "styled-components",
        "prismjs",
        "prism-react-renderer"
    ],
    plugins: [
        typescript({
            // clean: true,
            transformers: [
                () => ({
                    before: [styledComponentsTransformer],
                }),
            ],
        }),
        // typescript(),
        url(),
        resolve({
            extensions
        }),
        commonjs({
            extensions,
            namedExports: {
                "node_modules/lodash/lodash.js": ["merge"]
            }
        }),
        babel({
            babelHelpers: "runtime",
            exclude: "node_modules/**",
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["babel-plugin-styled-components"]
        }),
        // getBabelOutputPlugin({
        //     // babelHelpers: "runtime",
        //     exclude: "node_modules/**",
        //     presets: ["@babel/preset-env", "@babel/preset-react"],
        //     // plugins: ["babel-plugin-styled-components"]
        // }),
        terser()
    ]
}]
