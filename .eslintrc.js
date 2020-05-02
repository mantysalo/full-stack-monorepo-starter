module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./packages/*/tsconfig.eslint.json"],
  },
  plugins: ["@typescript-eslint", "prettier"],
  ignorePatterns: ["node_modules/"],
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/no-floating-promises": "error",
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  env: {
    browser: true,
    node: true,
  },
};
