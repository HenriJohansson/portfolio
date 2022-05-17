module.exports = {
    env: {
        browser: true, // Browser global variables like `window` etc.
        commonjs: true, // CommonJS global variables and CommonJS scoping.Allows require, exports and module.
        es6: true, // Enable all ECMAScript 6 features except for modules.
        jest: true, // Jest global variables like `it` etc.
        node: true // Defines things like process.env when generating through node
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jest/recommended",
        "plugin:testing-library/react",
        "plugin:jest-dom/recommended"
    ],
    parser: "babel-eslint", // Uses babel-eslint transforms.
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2022, // Allows for the parsing of modern ECMAScript features
        sourceType: "module" // Allows for the use of imports
    },
    plugins: ["testing-library", "jest-dom"],
    root: true, // For configuration cascading.
    rules: {
        "testing-library/no-render-in-setup": "error",
        "testing-library/no-wait-for-empty-callback": "error",
        "testing-library/prefer-explicit-assert": "error",
        "testing-library/prefer-presence-queries": "error",
        "testing-library/prefer-screen-queries": "error",
        "testing-library/prefer-wait-for": "error",
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error"
    },
    settings: {
        react: {
            version: "detect" // Detect react version
        }
    }
};