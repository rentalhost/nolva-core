import { defineConfig } from "tsdown";

export default defineConfig({
  minify: true,
  entry: {
    index: "./src/index.ts",
    next: "./src/next.ts",
  },
});
