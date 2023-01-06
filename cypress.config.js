const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com/",
    defaultCommandTimeout: 3000,
    viewportHeight: 900,
    viewportWidth: 1500,
    waitForAnimations: true,
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
