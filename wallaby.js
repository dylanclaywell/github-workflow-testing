module.exports = function (wallaby) {
  return {
    // .spec.ts files need to be ignored in the files array
    files: ["src/**/*.vue", "src/**/*.ts", { pattern: "src/**/*.spec.ts", ignore: true }],
    tests: ["src/**/*.spec.ts"],
    // Since we have both Playwright and Vitest tests, we need to specify the testFramework
    autoDetect: ["vitest"]
  }
}
