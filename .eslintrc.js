module.exports = {
  extends: [
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  ignorePatterns: ["**/*.js"],
  rules: {
    "max-len": [
      "error",
      {
        code: 120,
      },
    ],
    curly: "error",
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "*",
        next: ["block", "block-like", "expression", "return", "throw"],
      },
      {
        blankLine: "always",
        prev: ["block", "block-like", "expression"],
        next: "*",
      },
      {
        blankLine: "any",
        prev: "expression",
        next: "expression",
      },
    ],
    "lines-between-class-members": "off",
    "@typescript-eslint/lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: true },
    ],
    "@typescript-eslint/no-explicit-any": ["error"],
    "@typescript-eslint/explicit-function-return-type": ["error"],
    "@typescript-eslint/explicit-member-accessibility": ["error"],
  },
};
