module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.ts",
    "../src/**/*.stories.tsx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-material-ui"
  ],
  "core": {
    "builder": "webpack5"
  }
}