import { fileURLToPath } from "node:url"
import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    include: ["src/**/*.spec.ts"],
    root: fileURLToPath(new URL("./", import.meta.url)),
    coverage: {
      provider: "v8",
      reporter: [
        [
          "text",
          {
            file: "JavaScriptCodeCoverage.txt"
          }
        ],
        "lcov",
        "text",
        "text-summary",
        "cobertura"
      ]
    },
    setupFiles: ["vitest.setup.mts"]
  }
})
