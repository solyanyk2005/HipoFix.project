// import { defineConfig } from "cypress";
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    codeCoverage: {
      exclude: "cypress/**/*.*",
    },
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    setupNodeEvents(on, config) {
      require("@cypress/code-coverage/task")(on, config);

      return config;
    },
    specPattern: ["src/**/*.component.cy.{js,jsx}"],
  },

  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: ["src/**/!(*.component).cy.{js,jsx}"],
  },
});
