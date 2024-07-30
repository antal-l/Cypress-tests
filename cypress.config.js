const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "4756du",
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
